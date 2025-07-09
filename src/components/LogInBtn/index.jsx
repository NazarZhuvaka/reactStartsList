function LogInButton(props) {
  const { isLogin, logIn } = props;
  return <button onClick={logIn} type="submit" >{isLogin ? "Log out" : "Log in"}</button>;
}

export default LogInButton;
