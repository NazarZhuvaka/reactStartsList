function ThemeButton(props) {
  const { isLight, switchHandler, inlineStyles } = props;

  return (
    <button style={inlineStyles} onClick={switchHandler}>
      {isLight ? "dark" : "light"}
    </button>
  );
}

export default ThemeButton;
