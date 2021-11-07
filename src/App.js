import Profil from './profil/Profil';
import './App.css';
function App() {
  const handleName=(name,e)=>{
    e.preventDefault();
    alert(`${name}`);
  }
  return (
    <div className="App">
      <Profil name="Sakis" bio="ingenieur front end React JS" handleName={handleName}>/Photo.png</Profil>
      <Profil />
    </div>
  );
}

export default App;
