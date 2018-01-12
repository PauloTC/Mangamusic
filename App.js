import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './src/ArtistBox'
import ArtistList from './src/ArtistList'

import { 
  StyleSheet, 
  View, 
} from 'react-native';

export default class App extends React.Component {
  render() {

      const artist = {
        image : 'https://static.platzi.com/media/avatars/PauloT_4080475c-42d0-4ab3-adae-3750a6db40a4.jpg',
        name : 'Paulo Tejada',
        likes: 250,
        coments: 140
      }

      const artists= Array(2).fill(artist)
   
      return (
        <View style={styles.container} >
          <ArtistList artists={artists} artist={artist} />
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
