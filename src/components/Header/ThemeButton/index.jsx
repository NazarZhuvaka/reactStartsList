import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function ThemeButton(props) {
  const { isLight, switchHandler, inlineStyles, style } = props;

  return (
    <button className={style.themeButtom} style={inlineStyles} onClick={switchHandler}>
      {isLight ? <MdDarkMode size="2em"/> : <CiLight  size="2em"/>}
    </button>
  );
}

export default ThemeButton;
