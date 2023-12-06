import CustomButton from "../../Button/CustomButton";
import Inputfield from "../../Inputfield/Inputfield";
import "./CreateUserName.css"

export default function CreateUserName({onNextPage}) {

  const onButtonClick = () => {
    console.log("Button is clicked")
    setTimeout(() => {
      onNextPage();

    }, 300);

  };

    return (
        <div className="CreateAccountContainer">
            <div className="frameContainer">
      <div>
        <h1>Create Username</h1>
      </div>
     
        <div style={{margin: "95px 0"}}>
          <div style={{margin: "15px 0"}}>
        <Inputfield placeholder="Benutzername"></Inputfield>
            </div>
            <div style={{margin: "15px 0"}}>
        <CustomButton name="Weiter" onClick={onButtonClick} type="primary"></CustomButton>
          </div>

        </div>
      
      </div>
    </div>
    )
}