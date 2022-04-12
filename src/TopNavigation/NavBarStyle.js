import styled from "styled-components";
import { ReactComponent as Img } from "./IconNav.svg";


export const TopNavBar = styled.nav`
 width: 100%;
 height:89px;
 display:flex;
 justify-content: center;
    
`;

export const InnerNavContainer = styled.section`
 max-width: 1024px;
 width:100%;
 height: 100%;
 display: flex;
 margin: 0 75px 0 75px;
 justify-content:space-between;
 align-items:center;

@media (max-width: 768px){
    width:100%;
    height:100%;
    margin: 0 62px 0 62px; 
}

@media (max-width: 414px) {
 width:100%;
 height:100%;
 margin: 0 21px 0 21px;

}

`

export const LinksContainer = styled.section`
 height: 23px;
 display: flex;
 gap:39px;

`

export const IconNav = styled(Img)`
 width: 68px;
 height: 63px;
 flex-shrink: 0; 

 @media (max-width: 768px){
 width: 62px;
 height: 57.44px;
 }
 
 @media (max-width:414px){
 width: 62px;
 height: 57.44px;
 }
`;



export const NavLinks = styled.a`
 font-size: 20px;

 
 color: #F2F1F1;

 :last-child {
     margin:0;

 } 

 @media (max-width: 414px){
     font-size:16px;
 }
 
 &:hover {
     color: #59ADB2;
     cursor: pointer;

 }
 `;

