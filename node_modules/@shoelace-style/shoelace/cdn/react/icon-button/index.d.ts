import Component from '../../components/icon-button/icon-button.component.js';
import { type EventName } from '@lit/react';
import type { SlBlurEvent } from '../../events/events';
import type { SlFocusEvent } from '../../events/events';
export type { SlBlurEvent } from '../../events/events';
export type { SlFocusEvent } from '../../events/events';
/**
 * @summary Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
 * @documentation https://shoelace.style/components/icon-button
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @event sl-blur - Emitted when the icon button loses focus.
 * @event sl-focus - Emitted when the icon button gains focus.
 *
 * @csspart base - The component's base wrapper.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onSlBlur: EventName<SlBlurEvent>;
    onSlFocus: EventName<SlFocusEvent>;
}>;
export default reactWrapper;
