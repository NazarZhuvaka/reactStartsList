import style from './UserList.module.css'

function UsersListItem(props) {
  const {
    user: { id, firstName, profilePicture },
    onError,
    defIcon,
  } = props;

  const imgSrc = profilePicture || defIcon;
  const altImg = firstName + ' alt'
  return (
    <li>
      {id}
      {firstName}
      <img className={style.userImg} src={imgSrc} alt={altImg} onError={onError} />
    </li>
  );
}

export default UsersListItem;