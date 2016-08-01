// node
import path from 'path';
// vendors
import React from 'react';
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';
// project
import { Menu } from 'components/menu';
import { shallowWithIntl, mountWithIntl } from 'helpers/intl-enzyme-test-helper';

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

    it('should mount the Menu', () => {
        const wrapper = mountWithIntl(
            <Menu />
        );

        assert.equal(wrapper.find('div').props().className, 'main-menu');
    });

    it('should set the onFileHandler to the link', () => {
        const wrapper = shallowWithIntl(
            <Menu />
        );
        const fileItem = wrapper.find('a').at(0);

        assert.equal(fileItem.prop('onClick'), wrapper.instance().onFileHandler);
    });

    it('should trigger onSelect when file link is clicked', () => {
        const onSelect = sandbox.spy();
        const wrapper = shallowWithIntl(
            <Menu onSelect={ onSelect } />
        );
        const fileItem = wrapper.find('a').at(0);

        fileItem.simulate('click');
        sinon.assert.calledOnce(onSelect);
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
