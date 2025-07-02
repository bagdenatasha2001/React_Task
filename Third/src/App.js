import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todoitems from './components/Todoitems';
import Button from './components/Button';




function App() {
  return (
    <div className="Todo-container">
      <Header text="Todoie  App"/>
      <Todoitems text="Eat"/>
        <Todoitems text="Study"/>
        <Todoitems text="Coding"/>
        <Todoitems text="Exercise"/>
         <Todoitems text="Cooking"/>
           <Todoitems text="Book Read"/>
          <Todoitems text="Sleep"/>
      <Button/>
   </div>
  );
}

export default App;
