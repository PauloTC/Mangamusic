import React from 'react';
import ArtistBox from './ArtistBox'
import {
  FlatList
} from 'react-native';

export default class ArtistList extends React.Component {
    
  render() {
   
    return (

      <FlatList
      data={this.props.artists}
      renderItem={({item}) =><ArtistBox artist={item}  />}
      />
      
    );
  }
}