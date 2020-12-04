import { LoginInput } from '../LoginInput/LoginInput';
import { Title } from '../Title/Title';
import { ToasterContext } from '../Toaster/Toaster';

export const PostManagement = ({
    showPosts,
    postsAmount,
    showLogin,
    login,
    posts,
    inputRef,
    onTogglePosts,
    onFocusInput,
    onToggleLogin,
    onRemovePost
}) => (
    <ToasterContext.Consumer>
        {({ toasts }) => (
            <>
                <div>
                    <button type="button" onClick={onTogglePosts}>
                        {showPosts ? 'Hide posts' : 'Show posts'}
                    </button>

                    <button type="button" onClick={onFocusInput}>
                        Focus input
                    </button>

                    <button type="button" onClick={onToggleLogin}>
                        Show login
                    </button>
                </div>

                {toasts.map(t => (
                    <div
                        key={t.id}
                        style={{ backgroundColor: t.bgColor }}
                    >
                        {t.message}
                    </div>
                ))}

                <div>
                    <span>Posts Amount:</span> {/*-Добавить пробел*/}
                    <span>{postsAmount}</span>
                </div>

                {showLogin && <h1>{login}</h1>}

                <LoginInput
                    // onChange={this.handleChangeInput}
                    inputRef={inputRef}
                />

                {showPosts ? (
                    posts.map(post => (
                        <div className="post" key={post.id}>
                            <Title amount={post.amount}>
                                {post.title}
                            </Title>
                            <p>{post.text}</p>

                            <button
                                onClick={() => onRemovePost(post.id)}
                            >
                                Remove post #{post.id}
                            </button>
                        </div>
                    ))
                ) : (
                    <h1>There are no posts.</h1>
                )}
            </>
        )}
    </ToasterContext.Consumer>
);
