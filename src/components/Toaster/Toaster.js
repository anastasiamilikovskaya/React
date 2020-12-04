import { Component, createContext } from 'react';

export const ToasterContext = createContext({
    toasts: [],
    isVisible: false,
    onAddToasts: toast => {},
    onRemoveToast: toastId => {}
});

export class Toaster extends Component {
    state = {
        toasts: [],
        isVisible: false
    };

    handleAddToasts = toast => {
        this.setState(prevState => ({
            toasts: [...prevState.toasts, toast]
        }));
    };

    handleRemoveToast = toastId => {
        this.setState(prevState => ({
            toasts: prevState.toasts.filter(t => t.id !== toastId)
        }));
    };

    render() {
        const { toasts, isVisible } = this.state;
        const { children } = this.props;
        return (
            <ToasterContext.Provider
                value={{
                    toasts,
                    isVisible,
                    onAddToasts: this.handleAddToasts,
                    onRemoveToast: this.handleRemoveToast
                }}
            >
                {children}
            </ToasterContext.Provider>
        );
    }
}
