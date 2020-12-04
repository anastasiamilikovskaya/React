import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

export class Title extends PureComponent {
    // shouldComponentUpdate(nextProps) {
    //     const { amount, children } = this.props;
    //     if (
    //         amount === nextProps.amount &&
    //         children === nextProps.children
    //     ) {
    //         return false;
    //     }
    //     return true;
    // }

    componentWillUnmount() {
        console.log('Goodbye...');
    }

    render() {
        const { amount, children } = this.props;

        const count = amount + 10;

        console.log('%c[render]', 'color: orange; font-weight:bold;');

        // null, false, true, 23, 'Hello World', [].
        return (
            <h1 className="title">
                {children}{' '}
                <span className="title__amount">{count}</span>
            </h1>
        );
    }
}

Title.propTypes = {
    amount: PropTypes.number
};
