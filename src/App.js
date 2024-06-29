import React from 'react';
import homeIcon from './icon/home.png';  // Assuming home.png is in ./icon folder

const App = () => {
  const filterStyles = {
    filter: 'brightness(0) saturate(100%) invert(92%) sepia(39%) saturate(591%) hue-rotate(75deg) brightness(105%) contrast(102%)'
  };

  return (
    <div className="App">
      <img src={homeIcon} alt='Home' style={filterStyles}></img>
      <img src={homeIcon} alt='Home' style={filterStyles}></img>
      <img src={homeIcon} alt='Home' style={filterStyles}></img>
    </div>
  );
}

export default App;
