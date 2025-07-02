import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
  
     <Navbar  title="TeaxtUtils"  aboutText="About"   ContactText=" Contact"/>
    
     <div className="container my-3">
         <TextForm heading="Enter the Text  below to Analyze"/>
     </div>
    
        
  
    </>
  );
}

export default App;
