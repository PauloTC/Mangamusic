import React from 'react';
import ArtistBox from './ArtistBox'
// import ArtistDetailView from './ArtistDetailView';
import {
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default class ArtistList extends React.Component {

  handlePress(item) {

    console.warn('artist', item)
    // this.props.navigation('ArtistDetailView', {item})
    navigation.navigate('Detail',{ artist:'artist' }) 
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <FlatList
      data={this.props.artists}
      renderItem={({item}) =>{
        return (
            <TouchableOpacity
                  onPress={ () => handlePress(item)   }>
                <ArtistBox artist={item}  />
            </TouchableOpacity>
          )
          }}
      />
    );
  }
}