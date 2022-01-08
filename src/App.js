import logo from './logo.svg';
import './App.css';
import Result from './components/Result/Result';
import Search from './components/Search/Search';
import { DataState } from './context/DataState';

function App() {
  return (
    <DataState>
      <div className="App">
        Weather APP
        <Search></Search>
        <Result></Result>
      </div>
    </DataState>
  );
}

export default App;
