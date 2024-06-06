import styled from "styled-components"
import { getRequestRandomWords } from "../services/abiWrite"

const StyledButton = styled.button`
	margin: 1rem;
	color: black;
	font-size: 20px;
	font-weight: medium;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	width: 150px;
	background: linear-gradient(to left, blue, red);
	border-radius: 1rem;
`

const StyledDiv = styled.div`
	width: 500px;
	height: 288px;
	border: 8px solid;
	background-color: rgba(0, 0, 0, 0.5);
	border-image: linear-gradient(to left, #3a3af7, #f04747) 1;
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
`

export default function StartComponent({ setStart, setLoading, setIntroVideoState, Contract }) {
	return (
		<StyledDiv>
			<StyledButton
				onClick={async () => {
					setStart(false)
					setLoading(true)
					await getRequestRandomWords(Contract).then((receipt) => {
						if (receipt === 0) return
						setTimeout(() => {
							setLoading(false)
							setIntroVideoState(true)
						}, 70000)
					})
				}}
			>
				Start
			</StyledButton>
		</StyledDiv>
	)
}
