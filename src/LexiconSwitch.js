import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './LexiconSwitch.soy';

/**
 * Implementation of the Lexicon Switch
 *
 * @see  {@link http://liferay.github.io/lexicon/content/toggles/|Lexicon Definition}
 */
class LexiconSwitch extends Component {
}

/**
 * State definition.
 * @type {!Object}
 * @static
 */
LexiconSwitch.STATE = {
	/**
	 * Font Awesome icons (CSS class) that display on switch handle.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {object}
	 * @type {!{off: string, on: string}}
	 */
	buttonIcons: {
		validator: core.isObject
	},

	/**
	 * Determines the checked state of the switch.
	 * @default false
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {boolean}
	 */
	checked: {
		validator: core.isBoolean,
		value: false
	},

	/**
	 * Determines if the switch is disabled.
	 * @default false
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {boolean}
	 */
	disabled: {
		validator: core.isBoolean,
		value: false
	},

	/**
	 * Additional helper text that can be displayed on all sides of the switch.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {!{bottom: string, left: string, right: string, top: string}}
	 */
	helperText: {
		validator: core.isObject
	},

	/**
	 * Font Awesome icons (CSS class) that display on switch bar.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {!{off: string, on: string}}
	 */
	icons: {
		validator: core.isObject
	},

	/**
	 * Id attribute of the input element.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	id: {
		validator: core.isString
	},

	/**
	 * Main label that is rendered above the switch.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	label: {
		validator: core.isString
	},

	/**
	 * Name attribute of the input element.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	name: {
		validator: core.isString
	},

	/**
	 * Labels that display when switch is checked or unchecked.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {!{off: string, on: string}}
	 */
	statusLabels: {
		validator: core.isObject
	}
};

// Register component
Soy.register(LexiconSwitch, templates);

export default LexiconSwitch;
