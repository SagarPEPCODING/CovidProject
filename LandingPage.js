import React from 'react';
import HeaderComponent from './header';
import Content from './Content';
import ReactDOM from 'react-dom';

function Landing() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Content></Content>
        </>
    )
}

ReactDOM.render(<Landing />, document.getElementById('root'));

export default Landing;