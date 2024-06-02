import styled from "styled-components"

const StyledWindow = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	align-items: center;
	& p {
		color: var(--color-grey-500);
		margin-bottom: 1.2rem;
	}

	& div {
		display: flex;
		justify-content: flex-end;
		gap: 1.2rem;
	}
`

const StyleedDiv = styled.div`
	display: flex;

	padding: 15px;
	align-items: center;
`

const Image = styled.img`
	width: 150px;
`
const StyledButton = styled.button`
	display: inline-block;
	font-size: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
	transition: background-color 0.3s ease;
	color: #fff;
	border: 2px solid #3498db;
	background-image: linear-gradient(to right, rgba(52, 152, 219, 0.5), rgba(52, 152, 219, 0.8));
	cursor: pointer;

	&:hover {
		background-image: linear-gradient(to right, rgba(52, 152, 219, 0.8), rgba(52, 152, 219, 1));
	}
`

export default function MiniCard({ card, src, onCloseModal }) {
	return (
		<StyledWindow>
			<Image src={src} alt="player" />
			<StyleedDiv>
				{/* <StyledButton>Buy</StyledButton> */}
				<StyledButton onClick={onCloseModal}>Return</StyledButton>
			</StyleedDiv>
		</StyledWindow>
	)
}
