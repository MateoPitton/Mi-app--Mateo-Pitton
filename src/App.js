import NavBar from './components/navBar/NavBar';
import "./App.css"
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <header>
    <div>
        <NavBar/>
      <span className='items'>
      <ItemListContainer nombre="remera"/>
      <ItemListContainer nombre="pantalon"/>
      <ItemListContainer nombre="medias"/>
      </span>
    </div>
    </header>
  );
}

export default App;
