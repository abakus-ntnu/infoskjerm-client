import React, { Component } from 'react';

class busList extends Component {
        
    render (
        return (
            <div>
                {props.departureList.map(departure => <busListItem key={departure.id} busNr={departure.busNr} endeStopp={departure.endeStopp} tid={departure.tid} />)}
            </div> 
            ); )
}
