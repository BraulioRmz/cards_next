import './App.scss';
import Deck from './components/deck/deck';


function App() {
  return (
   
    <div className="App">
        <pre className="header">C a r d s   P r o y e c t</pre>
        <Deck path="all/" ></Deck>
        <h2 class="text" >D e c k</h2>
        <Deck  path="table/" flipped="2"/>
        <h2 class="text" >H a n d</h2>
        <Deck  path="deck/2" flipped="2"/>
    
    </div>
  );
}

export default App;
