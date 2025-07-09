import style from "./UserList.module.css";

import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function UserContacts(props) {
  const { contacts } = props;

  const getSocialType = (item) => {
    switch (true) {
      case item.toLowerCase().includes("facebook"):
        return <FaFacebook />;

      case item.toLowerCase().includes("instagram"):
        return <FaInstagram />;

      case item.toLowerCase().includes("twitter"):
        return <FaTwitter />;
      
        case item.toLowerCase().includes("linkedin"):
        return <FaLinkedin />;

      default:
        return "Unknown";
    }
  };

  return (
    <ul className={style.userLinks}>
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
