import React from 'react';
import ArtistBox from './ArtistBox'
// import ArtistDetailView from './ArtistDetailView';
import { navigate } from 'react-navigation';
import {
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default class ArtistList extends React.Component {

  handlePress(item) {

    console.warn('artist', item)
    navigate('ArtistDetailView')
  }

  render() {
   
    return (

      <FlatList
      data={this.props.artists}
      renderItem={({item}) =>{
        return (
            <TouchableOpacity 
                  onPress={ () =>  this.handlePress(item)}>
                <ArtistBox artist={item}  />
            </TouchableOpacity>
          )
          }}
      />
    );
  }
}