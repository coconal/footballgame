import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 400px;
	background: rgba(0, 0, 0, 0.7);
`

const StyledButton = styled.button`
	margin: 4px;
	color: black;
	font-weight: medium;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 210px;
	background: linear-gradient(to left, blue, red);
	border-radius: 2rem;
`

const StyledH1 = styled.h1`
	margin: 0;
`

const Deposited = () => {
	return (
		<StyledDiv>
			<Link to={"/"}>
				<StyledButton>
					<StyledH1>Return home</StyledH1>
				</StyledButton>
			</Link>
		</StyledDiv>
	)
}

export default Deposited
