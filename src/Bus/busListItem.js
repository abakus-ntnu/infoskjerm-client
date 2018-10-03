import React, { Component } from 'react';
import { connect } from 'react-redux';
import '/busListItem.css';

class busListItem extends Component{
	list_render(){
		<div>
			<span>{this.props.busItem.busNr}</span>
			<span>{this.props.busItem.endeStopp}</span>
			<span>{this.props.busItem.tid}</span>
		</div>
	}

	render(){
		return this.list_render()
	}
}


const busAPI_eksempel = {busNr: "", stopp: "", tid: "", endeStopp: ""}