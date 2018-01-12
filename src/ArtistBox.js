import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image 
} from 'react-native';

export default class ArtistBox extends React.Component {
  render() {

    // console.warn('el nombre', this.props.artist.name)
    const {image , name , likes , coments} = this.props.artist

    return (
      
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.info}  >
            <Text style={styles.name} >{name}</Text>
            <View style={styles.row} >
              <View style={styles.iconContainer}>
                <Icon name="ios-heart-outline" size={30} color="gray" />
                <Text style={styles.count}>{likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon name="ios-chatboxes-outline" size={30} color="gray" />
                <Text style={styles.count} >{likes}</Text>            
              </View>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  artistBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowOffset: {
      height: 1,
      width : -2,
    },
    elevation: 2,
  },
  image: {

    width: 150,
    height: 150,

  },
  info: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',

  },
  count: {
    color: 'gray'
  }
});
