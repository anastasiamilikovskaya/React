import {
    useState,
    // useEffect,
    useRef,
    // useContext,
    useMemo,
    useCallback,
    createContext,
    memo
} from 'react';
// import cn from 'classnames';
import styled, { css } from 'styled-components/macro';

import classes from './App.module.scss';

const AppContext = createContext({
    userName: '',
    showCounter: true
});

const Counter = memo(({ numbers, onChangeInput }) => {
    const [count, setCount] = useState(0);
    // const { userName, showCounter } = useContext(AppContext);

    console.log(
        '<Counter /> is rendering...',
        numbers,
        onChangeInput
    );

    // const renderCountRef = useRef(0); //{ current: 0 }

    // console.log('Renders: ', ++renderCountRef.current);

    // useEffect(() => {
    //     console.log('<Counter /> is ceated...');

    //     return () =>
    //         console.log('<Counter /> is going to be removed...');
    // }, []);

    const handleIncreaseCount = value =>
        setCount(prevCount => prevCount + value);

    const handleDecreaseCount = value =>
        setCount(prevCount => prevCount - value);

    return (
        <div>
            <div>{count}</div>

            {/* <div>
                <div>Username: {userName}</div>
                <div>Show counter: {String(showCounter)}</div>
            </div> */}
            <button
                type="button"
                onClick={() => handleIncreaseCount(1)}
            >
                +1
            </button>

            <button
                type="button"
                onClick={() => handleDecreaseCount(1)}
            >
                -1
            </button>

            <button
                type="button"
                onClick={() => handleIncreaseCount(5)}
            >
                +5
            </button>

            <button
                type="button"
                onClick={() => handleDecreaseCount(5)}
            >
                -5
            </button>
        </div>
    );
});

export const App = () => {
    const [userName, setUserName] = useState('John Doe');
    const [showCounter, setShowCounter] = useState(true);
    const [showError, setShowError] = useState(false);
    const inputRef = useRef(); // { current: null }

    // console.log('Before useEffect');

    // useEffect(() => {
    //     console.log('showCounter is Updated!');
    // }, [showCounter]);

    // useEffect(() => {
    //     console.log('userName is Updated!');
    // }, [userName]);

    const numbers = useMemo(() => [1, 2, 3, 4, 5, showCounter], [
        showCounter
    ]);
    // const handleChangeInput = useMemo(
    //     () => e => setUserName(e.target.value),
    //     []
    // );

    const handleChangeInput = useCallback(
        e => setUserName(e.target.value),
        []
    );

    // const handleChangeInput = e => setUserName(e.target.value);

    const handleToggleCounter = () =>
        setShowCounter(prevState => !prevState);

    const handleFocusInput = () => inputRef.current.focus();

    const handleCreateUser = () => {
        if (userName) return setShowError(false);

        setShowError(true);
        inputRef.current.focus();
    };

    return (
        <AppContext.Provider value={{ userName, showCounter }}>
            <div className={classes.App}>
                <div>
                    {showCounter && (
                        <Counter
                            numbers={numbers}
                            onChangeInput={handleChangeInput}
                        />
                    )}

                    <button
                        type="button"
                        onClick={handleToggleCounter}
                    >
                        {showCounter
                            ? 'Hide counter'
                            : 'Show counter'}
                    </button>

                    <button type="button" onClick={handleFocusInput}>
                        Focus input
                    </button>

                    <Controls>
                        <InputWrapper>
                            <Input
                                ref={inputRef}
                                autoComplete="off"
                                // className={cn('input', {
                                //     'input--error': showError
                                // })}
                                // className={classes.input}
                                $error={showError}
                                type="text"
                                name="userName"
                                placeholder="User name"
                                value={userName}
                                onChange={handleChangeInput}
                            />

                            {showError && (
                                <ErrorMessage>
                                    User name is required
                                </ErrorMessage>
                            )}
                        </InputWrapper>

                        <Button onClick={handleCreateUser}>
                            Create user
                        </Button>
                    </Controls>
                </div>
            </div>
        </AppContext.Provider>
    );
};

const primaryColor = '0, 0, 179';
const lightColor = '#fff';
const grayColor = '#ccc';
const dangerColor = '255, 0, 0';

const boxShadowMixin = (color, opacity) =>
    `0 0 20px 5px rgba(${color}, ${opacity})`;

const Controls = styled.div`
    display: flex;
    margin-top: 48px;
    align-items: flex-start;
`;

const applyError = ({ $error }) => {
    if (!$error) {
        return css`
            &:focus {
                border-color: rgb(${primaryColor});
                box-shadow: ${boxShadowMixin(primaryColor, 0.4)};
            }
        `;
    }

    return css`
        border: 2px solid rgb(${dangerColor});
        box-shadow: ${boxShadowMixin(dangerColor, 0.4)};
    `;
};

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 14px;
    font-size: 16px;
    outline: 0;
    border: 2px solid ${grayColor};
    border-radius: 3px;
    transition: border-color 150ms ease, box-shadow 150ms ease;

    ${applyError}
`;

const InputWrapper = styled.div`
    max-width: 400px;
    width: 100%;
    margin-right: 20px;
`;

const ErrorMessage = styled.span`
    display: inline-block;
    font-size: 12px;
    color: rgb(${dangerColor});
    margin-top: 4px;
    font-family: sans-serif;
`;

const Button = styled.button.attrs({
    type: 'button'
})`
    padding: 17px 25px;
    background-color: rgb(${primaryColor});
    color: ${lightColor};
    cursor: pointer;
    border-radius: 3px;
    border: none;
    outline: 0;
    transition: background-color 150ms ease, box-shadow 150ms ease;

    &:focus {
        box-shadow: ${boxShadowMixin(primaryColor, 0.4)};
    }
`;
// export class App extends Component {
//     state = {
//         count: 0
//     };

//     handleIncreaseCount = value => {
//         this.setState(prevState => ({
//             count: prevState.count + value
//         }));
//     };

//     handleDecreaseCount = value => {
//         this.setState(prevState => ({
//             count: prevState.count - value
//         }));
//     };

//     render() {
//         const { count } = this.state;
//         return (
//             <div className="App">
//                 <div>
//                     <strong>{count}</strong>

//                     <div>
//                         <button
//                             type="button"
//                             onClick={() =>
//                                 this.handleIncreaseCount(1)
//                             }
//                         >
//                             +1
//                         </button>

//                         <button
//                             type="button"
//                             onClick={() =>
//                                 this.handleDecreaseCount(1)
//                             }
//                         >
//                             -1
//                         </button>

//                         <button
//                             type="button"
//                             onClick={() =>
//                                 this.handleIncreaseCount(5)
//                             }
//                         >
//                             +5
//                         </button>

//                         <button
//                             type="button"
//                             onClick={() =>
//                                 this.handleDecreaseCount(5)
//                             }
//                         >
//                             -5
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
