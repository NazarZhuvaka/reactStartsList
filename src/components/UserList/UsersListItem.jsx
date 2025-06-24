import UserContacts from "./UserContacts";

function UsersListItem(props) {
  const {
    user: { lastName, firstName, profilePicture, contacts },
    onError,
    defIcon,
    style,
    isLight,
  } = props;

  const imgSrc = profilePicture || defIcon;
  const altImg = firstName + " photo";

  const newStyle = {
    color: isLight ? "white" : "black",
    backgroundColor: isLight ? "black" : "white",
  };

  return (
    <li style={isLight ? null : newStyle} className={style.productItem}>
      <div className={style.productItemIMGCon}>
        <img
          className={style.productItemIMG}
          src={imgSrc}
          alt={altImg}
          onError={onError}
        />
      </div>
      <p>
        {firstName} {lastName}
      </p>
      <UserContacts contacts={contacts} />
    </li>
  );
}

export default UsersListItem;
