import React from "react";
import './triple-box.styles.scss';

interface TripleBoxTypes {
    children?: any
}

const TripleBox: React.FC = ({ children }: TripleBoxTypes) => {
    return (
        <div className="triple-box">
            {children}
        </div>
    )
}

export default TripleBox;