//Css
import './css/App.css'

//Components
import Links from './components/Links'
import LinkForm from './components/LinkForm'
import NavMain from './components/NavMain'

function App() {
  return (
    <div className="App">
      <NavMain / >
      <LinkForm />
      <Links />
    </div>
  );
}

export default App;
