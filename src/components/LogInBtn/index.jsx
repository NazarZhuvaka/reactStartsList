function LogInButton(props) {
  const { isLogin, logIn, disabled } = props;
  return <button onClick={logIn} disabled={disabled} type="submit" >{isLogin ? "Log out" : "Log in"}</button>;
}

export default LogInButton;
