import React, { Component, PropTypes } from 'react';

import './styles.scss';

class Menu extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
        };
    }

    render() {
        return (
            <ul className='main-menu'>
                <li><a href='#'>File</a></li>
                <li><a href='#'>Edit</a></li>
                <li><a href='#'>Help</a></li>
            </ul>
        );
    }
}

export default Menu;
