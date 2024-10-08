import "./App.css";
import ABButton from "./component/ABButton"
import input from "./component/input";


function App() {
  const buttonClick = () => {
    console.log("Button click from parent");
  };
  return (
    <div>
      <ABButton btnClick={buttonClick}
      label="Register" className="abc" />
      <ABButton label="" />
      <ABButton label="logi" />
      <ABButton label="signup" />
      <ABButton label="ok" />
      <ABButton label="cancel" />
      </div>
  );
}


<div>
 <input palaceholder="enter name"/>
</div>

export default App;
