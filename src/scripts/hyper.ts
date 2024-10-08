import {
  // Atomic Component
  m3Modal,
  m3Button,
  m3BottomSheet,
  googleM3Icon,
  audioPlayer,
  // UI Component
  UI,
} from '../components';

// signature;
export function h<T extends keyof HTMLElementTagNameMap>(
  n: T,
  o?: InheritsFromNode | string | KuElementAttributes | nullish,
  ...c: (InheritsFromNode | string | falsy)[]
): HTMLElementTagNameMap[T];

export function h<T extends keyof Pick<KuElementTagNameMap, 'text' | 'icon' | 'audio-player' | 'mi-note'>>(
  n: T,
  o: KuElementTagNameMap[T]['options'],
  ...c: (InheritsFromNode | string | falsy)[]
): KuElementTagNameMap[T]['type'];

export function h<T extends keyof Omit<KuElementTagNameMap, 'text' | 'icon' | 'audio-player' | 'mi-note'>>(
  n: T,
  o?: KuElementTagNameMap[T]['options'],
  ...c: (InheritsFromNode | string | falsy)[]
): KuElementTagNameMap[T]['type'];

export function h(
  n: string,
  o: unknown,
  ...c: (InheritsFromNode | string | falsy)[]): HTMLElement | Text {
  // TODO TypeScriptの進化に期待。
  switch (n) {
    case 'icon': return googleM3Icon(o as KuElementTagNameMap['icon']['options']);
    case 'm3-button': return m3Button(o as KuElementTagNameMap['m3-button'], ...c);
    case 'm3-modal': return m3Modal(o as KuElementTagNameMap['m3-modal']['options'], ...c);
    case 'audio-player': return audioPlayer(o as KuElementTagNameMap['audio-player']['options']);
    case 'm3-bottom-sheet': return m3BottomSheet(o as KuElementTagNameMap['m3-bottom-sheet']['options'], ...c);
    case 'mi-note': return UI.miNote(o as KuElementTagNameMap['mi-note']['options']);
    case 'post-modal': return UI.postModal(o as KuElementTagNameMap['post-modal']['options']);
    case 'timeline': return UI.timeLine(o as KuElementTagNameMap['timeline']['options']);
    case 'mi-emoji-pallet': return UI.emojiPallet(o as KuElementTagNameMap['mi-emoji-pallet']['options']);
    case 'bottom-bar': return UI.bottomBar();
    case 'text': return document.createTextNode(o as KuElementTagNameMap['text']['options']);
    default:
      const $ = document.createElement(n);

      if (o instanceof Node || typeof o === 'string') $.append(o);
      else if (o) for (const [key, value] of Object.entries(o)) {
        if (key === 'onclick') $.onclick = value;
        else $.setAttribute(key, value)
      };

      $.append(...c.filter((v): v is InheritsFromNode | string => Boolean(v)));

      return $;
  }
}
