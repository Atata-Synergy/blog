import React from "react";
import styled from "styled-components";
import Logo from "./headerLogo.png";
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

function HeaderPreview() {
  return (
    <HPreview>
      <div className="LogoContainer">
        <Link href="/">
        <img src={Logo} />
        </Link>
      </div>
      <Divider />
    </HPreview>
  );
}

const HPreview = styled.div`
  background-color: var(--colorLight);
  padding: 7px;
  .LogoContainer{
      margin: auto;
      width: 10%;
      
    img {
        width: 80px;
      }
  }
  
`;
export default HeaderPreview;
