import { useEffect, useState } from 'react';
import config from './utils/app.config';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(config.apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        setData(data);
      })
  }, []);

  return (
    <div>
        {data}
    </div>
  );
}

export default App;
