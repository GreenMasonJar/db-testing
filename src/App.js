import './App.css';
import react, {useState} from 'react';

function App() {
  const [returnedData, setReturnedData] = useState('This is here just for funsies');
  const getData = async (url) => {
    const newData  = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData);
  }
  return (
    <div className="App">
      <button onClick={() => getData('/Properties')}>Properties</button>
      <button onClick={() => getData('/Price')}>Price, son</button>
      {returnedData}
    </div>
  );
}

export default App;
