function SearchBtn(props) {
  console.log("Props From serachBtn: ", props);
  const { clickMyFunc } = props;
  console.log(clickMyFunc);
  return (
    <li>
      <button onClick={()=>clickMyFunc('twitter')}>SearchBtn</button>
    </li>
  );
}

export default SearchBtn;
