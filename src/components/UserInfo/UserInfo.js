import { Component } from 'react';

import { Avatar } from '../Avatar/Avatar';
import { AppContext } from '../../context/AppContext';

export class UserInfo extends Component {
    static contextType = AppContext;
    componentDidMount() {
        console.log('[this.context]', this.context);
    }
    render() {
        const { rating } = this.context;
        return (
            <div>
                <Avatar />
                <strong>{rating} stars</strong>
            </div>
        );
    }
}
