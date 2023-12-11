import CustomButton from "../../Button/CustomButton";
import "./CreateAccount.css"

export default function CreateAccount({onNextPage}) {

  const onButtonClick = () => {
    setTimeout(() => {
      onNextPage();

    }, 300);

  };

    return (
        <div className="CreateAccountContainer">
            <div className="frameContainer">
      <div>
        <h1>Placeholder</h1>
      </div>
      <div>
        <p>Welcome, lets get started!</p>
      </div>
        <div style={{margin: "95px 0"}}>
          <div style={{margin: "15px 0"}}>
        <CustomButton name="Anmelden" onClick={onButtonClick} type="primary"></CustomButton>
            </div>
            <div style={{margin: "15px 0"}}>
        <CustomButton name="Konto erstellen" onClick={onButtonClick} type="secondary"></CustomButton>
          </div>

        </div>
      
      </div>
    </div>
    )
}