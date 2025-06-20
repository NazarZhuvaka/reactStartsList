import UserContacts from "./UserContacts";

function UsersListItem(props) {
  const {
    user: { id, firstName, profilePicture, contacts },
    onError,
    defIcon,
    style,
  } = props;

  const imgSrc = profilePicture || defIcon;
  const altImg = firstName + " photo";

  return (
    <li>
      {id}
      {firstName}
      <img
        className={style.userImg}
        src={imgSrc}
        alt={altImg}
        onError={onError}
      />
      <UserContacts contacts={contacts} />
    </li>
  );
}

export default UsersListItem;
