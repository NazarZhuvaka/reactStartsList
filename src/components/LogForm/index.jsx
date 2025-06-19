import LogInButton from "../LogInBtn"

function LogForm(props) {
  const {isLogin, logIn} = props
  return (
    <div>LogForm, Please log in 
      <LogInButton isLogin={isLogin} logIn={logIn}/>
    </div>
  )
}

export default LogForm
