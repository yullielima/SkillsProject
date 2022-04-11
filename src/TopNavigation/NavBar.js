import { TopNavBar, IconNav, NavLinks, LinksContainer, InnerNavContainer } from './NavBarStyle';


export const NavBar = () =>{
    return(
        
        <TopNavBar>
           
            <InnerNavContainer>
            <IconNav />
            <LinksContainer>
            <NavLinks>Skills</NavLinks>
            <NavLinks>Project</NavLinks>
            </LinksContainer>   
            </InnerNavContainer>
            
        </TopNavBar>
        
    );
};