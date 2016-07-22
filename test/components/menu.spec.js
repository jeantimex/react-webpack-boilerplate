// node
import path from 'path';
// vendors
import React from 'react';
// project
import Menu from 'components/menu';

import { shallow } from 'enzyme';
import { assert, expect } from 'chai';

const sandbox = sinon.sandbox.create();

describe('Testing', () => {
    afterEach(() => {
        sandbox.verifyAndRestore();
    });

    it('should render the Menu', () => {
        const wrapper = shallow(
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
