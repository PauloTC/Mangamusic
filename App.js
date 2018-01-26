import { StackNavigator } from 'react-navigation';
import HomeView from './src/HomeView'
import ArtistDetailView from './src/ArtistDetailView'
import { Platform } from 'react-native'



const App = StackNavigator({
		Home: { 
      screen: HomeView,
      navigationOptions: {
        header: null,
      },
    },
    Detail: {
      screen: ArtistDetailView,
    }
	});

  export default App;