import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox'
import {getArtists } from './api-client'

import { 
	StyleSheet, 
	View,
	Text
} from 'react-native';

export default class ArtistDetailView extends React.Component {


	render() {

			const artist = this.props.navigation.state.params.item

			return (
				<View style={styles.container} >
					<ArtistBox artist={artist}  />
				</View>

			);
		}
	}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray'
	},
});
