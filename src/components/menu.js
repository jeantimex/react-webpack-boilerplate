import React, { Component, PropTypes } from 'react';
import {
    defineMessages,
    injectIntl,
    intlShape,
    FormattedMessage,
} from 'react-intl';

import './styles.scss';

const messages = defineMessages({
    file: {
        id: 'file',
        defaultMessage: 'File',
        description: 'The file menu item',
    },
    edit: {
        id: 'edit',
        defaultMessage: 'Edit',
        description: 'The edit menu item',
    },
    help: {
        id: 'help',
        defaultMessage: 'Help',
        description: 'The help menu item',
    },
});

export class Menu extends Component {
    static propTypes = {
        intl: intlShape,
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
        };
    }

    render() {
        const { formatMessage } = this.props.intl;

        return (
            <div className='main-menu'>
                <FormattedMessage
                    id='helloWorld'
                    defaultMessage='Hello World!'
                    description='greeting message'
                />
                <ul>
                    <li><a href='#'>{ formatMessage(messages.file) }</a></li>
                    <li><a href='#'>{ formatMessage(messages.edit) }</a></li>
                    <li><a href='#'>{ formatMessage(messages.help) }</a></li>
                </ul>
            </div>
        );
    }
}

export default injectIntl(Menu);
