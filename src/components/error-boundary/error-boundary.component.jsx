import React from "react";
import { Link } from "react-router-dom";

import { 
    ErrorImageOverlay, 
    ErrorImageContainer, 
    ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasErrored: false
        }
    }
    
    static getDerivedStateFromError(error) {
        // process the error
        return {hasErrored: true}
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored || this.props.hasError) {
            return <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='./404.png' />
                <ErrorImageText>This Page Lost in Space</ErrorImageText>
                <br />
                <Link to='/' className="link">Return to Homepage</Link>
            </ErrorImageOverlay>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;