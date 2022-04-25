import React from "react";
import { useAppSelector } from "../../redux/hooks";
import './previous-clients.styles.scss';
import TripleBox from "../triple-box/triple-box.component";
import ClientBox from "../client-box/client-box.component";

const PreviousClients = () => {
    const previousClients = useAppSelector(state => state.content.pages.home.previousClients);
    return (
        <div className="previous-clients">
            <h1 className="previous-clients__header">Previous clients include</h1>
                {
                    previousClients.map(client => <ClientBox {...client} />)
                }
        </div>  
        
    )
}

export default PreviousClients;