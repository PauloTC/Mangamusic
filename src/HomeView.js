	import React from 'react';
	import Icon from 'react-native-vector-icons/Ionicons';
	import ArtistBox from './ArtistBox'
	import ArtistList from './ArtistList'
	import {getArtists } from './api-client'
	
	import { 
		StyleSheet, 
		View, 
	} from 'react-native';
	
	export default class HomeView extends React.Component {
	
		constructor(props) {
			super(props);
	
			this.state = {
				artists: []
			}
	
		}
	
		componentDidMount(){
			getArtists().then(data => this.setState({ 
				artists:data
			})  )
		}
	
		render() {
				// console.warn('data', this.state.artists )
	
				const artists = this.state.artists
	
				return (
					<View style={styles.container} >
						<ArtistList artists={artists}  />
					</View>
	
				);
			}
		}
	
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: 'lightgray',
			paddingTop: 50,
		},
	});
	