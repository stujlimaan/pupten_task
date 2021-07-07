import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>pupten.</Heading>
			<FooterLink href="#"><i class="cib-facebook"></i></FooterLink>
			<FooterLink href="#">founders@pupten.com</FooterLink>
			<FooterLink href="#">+919693775328</FooterLink>
		</Column>
		<Column>
			<Heading>PRODUCTS</Heading>
			<FooterLink href="#">Veteniary Dashboard</FooterLink>
			<FooterLink href="#">Caregiver Portal</FooterLink>
			<FooterLink href="#">Find and Book a Vet</FooterLink>
		</Column>
		<Column>
			<Heading>PLATFORM</Heading>
			<FooterLink href="#">Sign Up</FooterLink>
			<FooterLink href="#">Book a Demo</FooterLink>
			<FooterLink href="#">Blog</FooterLink>
		</Column>
		<Column>
			<Heading>INFORMATION</Heading>
			<FooterLink href="#">Careers</FooterLink>
			<FooterLink href="#">FAQ</FooterLink>
			<FooterLink href="#">Privacy Policy</FooterLink>
			<FooterLink href="#">Terms & Conditions</FooterLink>
			<FooterLink href="#">Refund Policy</FooterLink>
		</Column>
		</Row>
	</Container>
	<h4 style={{ color: "white",
				textAlign: "center",
				marginBottom: "-50px" }}>
		Copyright<FontAwesomeIcon icon="copyright"/> 2021 Pupten. All Rights Reserved.
	</h4>

	</Box>
);
};
export default Footer;
