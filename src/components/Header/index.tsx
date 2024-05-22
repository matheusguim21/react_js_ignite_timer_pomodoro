import { Scroll, Timer } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import IgniteLogo from "../../assets/ignite-logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={IgniteLogo} />
      <nav>
        <NavLink to={"/"} title="Timer" >
          <Timer size={24}/>
        </NavLink>
        <NavLink to={"/history"} title="Histórico">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
