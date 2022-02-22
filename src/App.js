import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Album from './components/Album/Album';
import AlbumProvider from './components/Context/AlbumProvider/AlbumProvider';

function App() {
  return (
    <div className="">
      <AlbumProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/album">
              <Album></Album>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </AlbumProvider>
    </div>
  );
}

export default App;
