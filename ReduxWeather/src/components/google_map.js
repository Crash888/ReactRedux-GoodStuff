import React, { Component } from 'react';

class GoogleMap extends Component {
	
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		return (
			//  this.refs.map gives access to this element
			<div ref="map" />
		)
	}
}

export default GoogleMap;



/*  Maybe can use react-google-maps?  Needs work though 

import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
	return (
		<GoogleMapLoader
			containerElement={ <div style={{height: '100%'}} /> }
			googleMapElement={
				<GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
			}
			/>
	)
}
*/




