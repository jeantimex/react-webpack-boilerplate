// node
import path from 'path';
// vendors
import React from 'react';
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';
// project
import { Menu } from 'components/menu';
import { shallowWithIntl } from 'helpers/intl-enzyme-test-helper';

const sandbox = sinon.sandbox.create();

describe('Testing', () => {
    afterEach(() => {
        sandbox.verifyAndRestore();
    });

    it('should render the Menu', () => {
        const wrapper = shallowWithIntl(
            <Menu />
        );
        assert.ok(wrapper.hasClass('main-menu'));
    });

    it('node import should work', () => {
        expect(path).to.not.equal(null);
    });

    it('vendors import should work', () => {
        expect(React).to.not.equal(null);
    });


    it('local import should exist', () => {
        assert.notEqual(null, Menu);
    });

    it('should be 2', () => {
        let sum = 1 + 1;
        assert.equal(2, sum);
    });
});
