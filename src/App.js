import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import TopAppBar from './appbar';
import store from './redux/store';
import PlaceDetails from './placeDetails';
function App() {
  return (
    <>
      <Provider store={store}>
      <TopAppBar/>
      <PlaceDetails/>
      </Provider>
    </>
  );
}

export default App;
