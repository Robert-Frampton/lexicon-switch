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
	 * Font Awesome icon (CSS class) that displays on the switch handle when off.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	buttonIconOff: {
		validator: core.isString
	},

	/**
	 * Font Awesome icon (CSS class) that displays on the switch handle when on.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	buttonIconOn: {
		validator: core.isString
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
	 * Additional helper text that is displayed above the switch.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	helperText: {
		validator: core.isString
	},

	/**
	 * Additional helper text that is displayed below the switch.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	helperTextBottom: {
		validator: core.isString
	},

	/**
	 * Additional helper text that is displayed to the left of the switch.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	helperTextLeft: {
		validator: core.isString
	},

	/**
	 * Additional helper text that is displayed to the right the switch.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	helperTextRight: {
		validator: core.isString
	},

	/**
	 * Font Awesome icon (CSS class) that is displayed on switch bar when off.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	iconOff: {
		validator: core.isString
	},

	/**
	 * Font Awesome icon (CSS class) that is displayed on switch bar when on.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	iconOn: {
		validator: core.isString
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
	 * Label that is rendered above the switch.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	label: {
		validator: core.isString
	},

	/**
	 * Label that is displayed to the side of the switch when off.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	labelOff: {
		validator: core.isString
	},

	/**
	 * Label that is displayed to the side of the switch when on.
	 * @default undefined
	 * @instance
	 * @memberof LexiconSwitch
	 * @type {string}
	 */
	labelOn: {
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
	}
};

// Register component
Soy.register(LexiconSwitch, templates);

export default LexiconSwitch;
