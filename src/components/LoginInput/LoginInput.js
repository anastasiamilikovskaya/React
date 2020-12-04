import {Component} from 'react';

export class LoginInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hello: 'world'
        }

        console.log(
            '%c[constructor]',
            'color: blue; font-weight:bold;'
        );
    }

    static getDerivedStateFromProps(props, state){
        console.log(
            '%c[getDerivedStateFromProps]',
            'color: blue; font-weight:bold;'
        );

        return null;
    }

    componentDidMount() {
        console.log(
            '%c[componentDidMount]',
            'color: blue; font-weight: bold;'
        );
    }

    render() {
        const { 
            inputRef
            // value, 
            // onChange 
        } = this.props;

        console.log(
            '%c[render]',
            'color: blue; font-weight:bold;'
        );

        return (
            <div>
                <input
                    ref={inputRef}
                    type="text"
                    name="login"
                    placeholder="Login"
                    autoComplete="off"
                    // value={value}
                    // onChange={onChange}
                />
            </div>
        );
    }
};