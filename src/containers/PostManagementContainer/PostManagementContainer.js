import { Component as ReactComponent } from 'react';

const DEFAULT_POSTS = [
    {
        id: 1,
        title: 'Welcome to our App!',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium tempora minus illo nesciunt, aperiam, itaque
        voluptatem necessitatibus possimus rerum laboriosam quas
        provident, natus doloremque officiis quo iusto quibusdam optio
        commodi autem rem placeat quam sequi recusandae! Consectetur
        facere rerum minima corporis veniam, placeat harum architecto
        maxime illo commodi expedita quae.`,
        amount: 23
    },
    {
        id: 2,
        title: 'Hello World!',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Pariatur illo totam doloremque cupiditate dignissimos nostrum 
        fugiat ducimus accusantium libero, officiis commodi! Reprehenderit 
        hic voluptatem quidem, aperiam fugiat quia odit blanditiis tenetur sequi 
        amet et maxime sint, eum, fuga saepe odio.`,
        amount: 45
    },
    {
        id: 3,
        title: 'Last post',
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, 
        quod perferendis in ipsum illum maiores placeat natus reprehenderit? 
        Corporis quisquam magni assumenda expedita fuga? Consequatur saepe unde tempore 
        praesentium explicabo.`,
        amount: 100
    }
];

export class PostManagementContainer extends ReactComponent {
    state = {
        posts: DEFAULT_POSTS,
        postsAmount: 3,
        showPosts: true,
        login: '',
        showLogin: false
    };

    handleRemovePost = postId => {
        console.log('[postId]', postId);
        const { posts } = this.state;

        const filteredPosts = posts.filter(p => p.id !== postId);

        this.setState({
            posts: filteredPosts,
            postsAmount: filteredPosts.length
        });
    }

    handleTogglePosts = () => {
        console.log(this.inputRef);
        this.setState(
            prevState => ({
                showPosts: !prevState.showPosts
            })
            // () => console.log('Updated!')
        );
    };

    handleChangeInput = e => {
        this.setState({ login: e.target.value });
    };

    handleToggleLogin = () => {
        this.setState(prevState => ({
            login: this.inputRef.current.value,
            showLogin: !prevState.showLogin
        }));
    };

    render() {
        const { as: Component, ...other } = this.props;

        return (
            <Component
                {...this.state}
                onTogglePosts={this.handleTogglePosts}
                onToggleLogin={this.handleToggleLogin}
                onRemovePost={this.handleRemovePost}
                {...other}
            />
        );
    }
}
