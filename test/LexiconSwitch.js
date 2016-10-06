'use strict';

import LexiconSwitch from '../src/LexiconSwitch';

let lexiconSwitch;

describe('LexiconSwitch', () => {
	afterEach(() => {
		if (lexiconSwitch) {
			lexiconSwitch.dispose();
		}
	});

	it('should render default switch element without any params', () => {
		lexiconSwitch = new LexiconSwitch();

		assert.strictEqual(lexiconSwitch.element.outerHTML, __html__['test/fixture/testDefaultLexiconSwitch.html']);
	});

	it('should render label text immediately after input element', () => {
		lexiconSwitch = new LexiconSwitch({
			label: 'Label'
		});

		assert.strictEqual(lexiconSwitch.element.outerHTML, __html__['test/fixture/testLabelLexiconSwitch.html']);
	});

	it('should add elementClasses to outermost container', () => {
		lexiconSwitch = new LexiconSwitch({
			elementClasses: 'css-class'
		});

		assert.strictEqual(lexiconSwitch.element.outerHTML, __html__['test/fixture/testElementClassesLexiconSwitch.html']);
	});

	it('should add name attribute to input element', () => {
		lexiconSwitch = new LexiconSwitch({
			name: 'name'
		});

		assert.strictEqual(lexiconSwitch.element.outerHTML, __html__['test/fixture/testNameLexiconSwitch.html']);
	});

	it('should add id attribute to input element', () => {
		lexiconSwitch = new LexiconSwitch({
			id: 'id'
		});

		assert.strictEqual(lexiconSwitch.element.outerHTML, __html__['test/fixture/testIdLexiconSwitch.html']);
	});

	it('should render switch with on/off label elements', () => {
		lexiconSwitch = new LexiconSwitch({
			statusLabels: {
				off: 'Off',
				on: 'On'
			}
		});

		assert.strictEqual(lexiconSwitch.element.outerHTML, __html__['test/fixture/testOnOffLabelsLexiconSwitch.html']);
	});

	it('should render switch with on/off icon elements', () => {
		lexiconSwitch = new LexiconSwitch({
			icons: {
				off: 'icon-remove',
				on: 'icon-ok'
			}
		});

		assert.strictEqual(lexiconSwitch.element.outerHTML, __html__['test/fixture/testIconsLexiconSwitch.html']);
	});

	it('should render switch with on/off button icon elements', () => {
		lexiconSwitch = new LexiconSwitch({
			buttonIcons: {
				off: 'icon-remove',
				on: 'icon-ok'
			}
		});

		assert.strictEqual(lexiconSwitch.element.outerHTML, __html__['test/fixture/testButtonIconsLexiconSwitch.html']);
	});

	it('should render label and helper text elements in correct order', () => {
		lexiconSwitch = new LexiconSwitch({
			helperText: {
				bottom: 'helperTextBottom',
				left: 'helperLeft',
				right: 'helperTextRight',
				top: 'helperText'
			},
			label: 'Label'
		});

		assert.strictEqual(lexiconSwitch.element.outerHTML, __html__['test/fixture/testHelperTextLexiconSwitch.html']);
	});

	it('should add checked attribute to input element', () => {
		lexiconSwitch = new LexiconSwitch({
			checked: true
		});

		assert.strictEqual(lexiconSwitch.element.outerHTML, __html__['test/fixture/testCheckedLexiconSwitch.html']);
	});

	it('should add disabled attribute to input element', () => {
		lexiconSwitch = new LexiconSwitch({
			disabled: true
		});

		assert.strictEqual(lexiconSwitch.element.outerHTML, __html__['test/fixture/testDisabledLexiconSwitch.html']);
	});
});
