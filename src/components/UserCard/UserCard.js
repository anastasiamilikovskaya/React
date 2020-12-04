import { UserInfo } from '../UserInfo/UserInfo';
import { ToasterContext } from '../Toaster/Toaster';

export const UserCard = () => (
    <ToasterContext.Consumer>
        {({ onAddToasts }) => (
            <div className="user-card">
                <UserInfo />
                <button
                    tupe="button"
                    onClick={() =>
                        onAddToasts({
                            id: 1,
                            message: 'This is my first toats',
                            bgColor: 'blue'
                        })
                    }
                >
                    Add toasts
                </button>
            </div>
        )}
    </ToasterContext.Consumer>
);
