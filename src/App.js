import React from 'react';
import styles from './Styles/Style.less'

const App = () => {
  return (
    <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-around', ...styles }}>
        <h1>Goedemiddag</h1>
    </div>
  );
};

export default App;