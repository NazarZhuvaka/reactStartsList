function UserContacts(props) {
  const { contacts } = props;

  const getSocialType = (item) => {
    switch (true) {
      case item.toLowerCase().includes("facebook"):
        return "Facebook";

      case item.toLowerCase().includes("instagram"):
        return "Instagram";

      case item.toLowerCase().includes("twitter"):
        return "Twitter";

      default:
        return "Unknown";
    }
  };

  return (
    <ul>
      {contacts.map((item, index) => {
        const typeSocial = getSocialType(item);

        if (typeSocial === "Unknown") return;

        return (
          <li key={index}>
            <a href={item}>{typeSocial}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default UserContacts;
