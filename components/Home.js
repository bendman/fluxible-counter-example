import React from 'react';
import Counter from './Counter';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to the site!</p>
                <Counter />
            </div>
        );
    }
}

export default Home;
