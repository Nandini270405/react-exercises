function LoginControl(props) {
  if (props.isLoggedIn) {
    return <button onClick={props.onLogoutClick}>Logout</button>;
  } else {
    return <button onClick={props.onLoginClick}>Login</button>;
  }
}

export default LoginControl;




