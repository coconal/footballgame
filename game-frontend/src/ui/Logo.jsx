import styled from "styled-components"
import logo from "../assets/glowCropped.png"

const StyledLogo = styled.div`
	text-align: center;
`

const Img = styled.img`
	height: 6.9rem;
	width: auto;
`

export default function Logo() {
	return (
		<StyledLogo>
			<Img src={logo} alt="logo" />
		</StyledLogo>
	)
}
