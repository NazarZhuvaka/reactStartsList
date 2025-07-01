function HeaderLinks(props) {
  const {style} = props  
  const headerLink = ["Home", "About", "Contats"];

  const mapUser = (link, i) => {
    const href = `#!${link}`;
    return (
      <li key={i}>
        <a className="headerLink" href={href}>
          {link}
        </a>
      </li>
    );
  };

  return <ul className={style.headerLinks}>{headerLink.map(mapUser)}</ul>;
}

export default HeaderLinks;
