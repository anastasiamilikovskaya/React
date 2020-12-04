import { AppContext } from '../../context/AppContext';

export const Avatar = () => (
    <AppContext.Consumer>
        {({ url, alt }) => (
            <div>
                <img src={url} alt={alt} />
            </div>
        )}
    </AppContext.Consumer>
);
