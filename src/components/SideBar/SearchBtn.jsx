function SearchBtn(props) {
  const { clickMyFunc } = props;

  const optionstOfSearch = [
    "All",
    "twitter",
    "facebook",
    "instagram",
    "linkedin",
  ];

  return (
    <ul>
      {optionstOfSearch.map((item, index) => {
        return (
          <li key={index}>
            <button onClick={() => clickMyFunc(item)}>{item}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchBtn;
