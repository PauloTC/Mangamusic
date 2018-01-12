import React from 'react';
import ArtistBox from './ArtistBox'
import { 
  StyleSheet, 
  Image,
  FlatList,
} from 'react-native';

export default class ArtistList extends React.Component {
  constructor(props){
    super(props);

    this.state= {

    }

  }
  render() {
   
    return (

      <FlatList
      data={this.props.artists}
      renderItem={({item}) =><ArtistBox artist={this.props.artist}  />}
      />
      
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
