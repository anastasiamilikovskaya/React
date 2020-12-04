import {Component} from 'react';

 export class ErrorBoundary extends Component {
    state = {
        error: null
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    sayHello() {
        console.log('Hello World!');
    }

    render() {
    const { error } = this.state;
    const { children, additionalPage } = this.props;

        if (error) {
            // const { name, message, stack } = error;

            return additionalPage({error, onSayHello: this.sayHello});
            // return (
            //     <div className="app">
            //         <h1>{name}</h1>
            //         <p>{message}</p>
            //         <p>{stack}</p>
            //     </div>
            // )
        }
        return children;
    }
}