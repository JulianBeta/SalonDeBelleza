import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from './Footerstyle';
import './../../Stylesheets/Footer.css'
 
const Footer = () => {
    return (
        <div className="footerprobe">
            <FooterContainer>
                {/* <Row> */}
                     <Column>
                     <div>Gloria Norato</div>
                     <div>Copyright © 2023: DD - Developer Doggies-</div>
                     <div>contactenos@elcorreodelatia.com</div>
                     <div>Todos los derechos reservados</div>
                     <div>Prohibida su reproducción total o parcial, así como su traducción a cualquier idioma sin autorización escrita de su titular.</div>
                     </Column>
                    
                {/* </Row> */}
            </FooterContainer>
        </div>
    );
};
export default Footer;