import './App.css';
import Adresse from './components/Profile/Adresse';
import FullName from './components/Profile/FullName';
import Navvv from './components/Profile/Navvv';
import ProfilePhoto from './components/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <Navvv/>
      <div className='content'>  
      <FullName/>
      <Adresse/>
      <ProfilePhoto/>
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#00cba9" fill-opacity="1" d="M0,256L17.1,245.3C34.3,235,69,213,103,192C137.1,171,171,149,206,144C240,139,274,149,309,176C342.9,203,377,245,411,245.3C445.7,245,480,203,514,197.3C548.6,192,583,224,617,208C651.4,192,686,128,720,101.3C754.3,75,789,85,823,106.7C857.1,128,891,160,926,154.7C960,149,994,107,1029,112C1062.9,117,1097,171,1131,176C1165.7,181,1200,139,1234,149.3C1268.6,160,1303,224,1337,240C1371.4,256,1406,224,1423,208L1440,192L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg>
    </div>
  );
}

export default App;
