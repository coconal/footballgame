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

export default function Card({ card, isbuy, isgk = "false", iskeeper = "false" }) {
	return (
		<StyledDiv>
			<Modal>
				<Modal.Open opens={`${Number(card[0])}`}>
					<Image
						src={`/images/${isgk === "true" ? "keepers" : "players"}/${Number(card[0])}.png`}
						key={card[0]}
						iskeeper={iskeeper}
					/>
				</Modal.Open>
				<Modal.Window name={`${Number(card[0])}`}>
					<MiniCard
						card={card}
						src={`/images/${isgk === "true" ? "keepers" : "players"}/${Number(card[0])}.png`}
						isbuy={isbuy}
						iskeeper={iskeeper}
					/>
				</Modal.Window>
			</Modal>
		</StyledDiv>
	)
}
