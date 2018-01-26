import React from 'react';
import ArtistBox from './ArtistBox'
// import ArtistDetailView from './ArtistDetailView';
import {
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default class ArtistList extends React.Component {

  handlePress(item) {

    const { navigation } = this.props;
    // console.warn('artist', item)
    navigation.navigate('Detail',{item})
  }
  
  render() {
    return (
      <FlatList
      data={this.props.artists}
      renderItem={({item}) =>{
        return (
            <TouchableOpacity
                  onPress={ () =>  this.handlePress(item)  }>
                <ArtistBox artist={item}  />
            </TouchableOpacity>
          )
          }}
      />
    );
  }
}