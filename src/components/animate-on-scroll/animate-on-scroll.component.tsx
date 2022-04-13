import React from 'react';
import './animate-on-scroll.styles.scss';

class AnimateOnScroll extends React.Component {
    handleScroll = () => {
        
    }
    
    render() {
        // const body = document.body;
        // body.onscroll = this.handleScroll;
        return (
            <div className="initial" onScroll={this.handleScroll}>
                {this.props.children}
            </div>
        )
    }
}

export default AnimateOnScroll;