import "./App.css";
import "./style.css";

function App() {
  return (
    <div>
      <div className="first">
        <h1 className="title red">Your name here</h1>
        <br />
        <img src="/maa.jpg" alt="myimage" className="image" /> <br />
        <img src="/zz.jpg" alt="secondimage" className="image" />
      </div>
      <video className="video" width="320" height="240" controls>
        <source src="/démo-dashboard.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
