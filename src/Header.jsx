// import styles from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  HeaderDiv,
  Logo,
  NavDiv,
  NavUl,
  NavLi,
  IconDiv,
} from "./styledComponent";

function Header() {
  return (
    <HeaderDiv>
      <Logo>gongi</Logo>
      <NavDiv>
        <NavUl>
          <NavLi>Home</NavLi>
          <NavLi>Product</NavLi>
          <NavLi>Pricing</NavLi>
          <NavLi>Contact</NavLi>
        </NavUl>
        <IconDiv>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#737373" }}
          />
        </IconDiv>
      </NavDiv>
    </HeaderDiv>
  );
}

export default Header;
