import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import Products from './components/main/products/Products';


//REDUX
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    
    <div className="App">
    
     <SearchBar />
     <Products />
    </div>
   
    </Provider>
  );
}

export default App;
