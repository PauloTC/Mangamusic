import { StackNavigator } from 'react-navigation';
import HomeView from './src/HomeView'
import ArtistDetailView from './src/ArtistDetailView'



const App = StackNavigator({
		Home: { 
      screen: HomeView,
      navigationOptions: {
        header: null,
      },
    },
    ArtistDetailView: {
      screen: ArtistDetailView,
    }
	});

  export default App;