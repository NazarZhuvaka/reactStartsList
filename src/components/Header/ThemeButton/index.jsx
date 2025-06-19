function ThemeButton(props) {
  const {isLight, switchHandler, inlineStyles} = props

  // const inlineStyles = {
  //   color: isLight ? 'black' : 'white',
  //   backgroundColor: isLight ? 'white' : 'black'
  // }

  return <button style={inlineStyles} onClick={switchHandler}>{isLight ? 'dark' : 'light'}</button>;
}

export default ThemeButton;
