import logo from '../logo.jpg';
// import solutionPage from './solutionPage';
function HeaderComponent() {
  return (
    <div className="App">
      <div className="App-Header">
        <img className="App-Header-img" src={logo} alt = "helloguys"></img>
        <div className="headerpara">
          <div className="Homebtn"><button className="font-size">Home</button></div>
          <div className="covid19pandemicbtn"><button className="font-size">COVID 19 Pandemics</button></div>
          <div className="solutionbtn"><button className="font-size">Solution</button></div>
          <div className="Homebtn"><button className="font-size">Safety Suggestions</button></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;