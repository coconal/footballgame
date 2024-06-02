import styled from "styled-components"
import Modal from "./Modal"
import MiniCard from "./MiniCard"

const StyledDiv = styled.div`
	padding: 15px;
	border-radius: 5px;
	margin: 5px 0;
`

const Image = styled.img`
	cursor: pointer;
	width: 90px;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.2);
	}
`

export default function Card({ card }) {
	return (
		<StyledDiv>
			<Modal>
				<Modal.Open opens={`${Number(card[0])}`}>
					<Image src={`/images/players/${Number(card[0])}.png`} key={card[0]} />
				</Modal.Open>
				<Modal.Window name={`${Number(card[0])}`}>
					<MiniCard card={card} src={`/images/players/${Number(card[0])}.png`} />
				</Modal.Window>
			</Modal>
		</StyledDiv>
	)
}
