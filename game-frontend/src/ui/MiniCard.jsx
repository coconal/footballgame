import styled from "styled-components"
import { useBuyPlayer } from "../features/marketplace/useBuyPlayer"
import { useWeb3 } from "../context/Web3Provider"
import { useEffect } from "react"

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
const StyledText = styled.p`
	font-family: "YourFontName", sans-serif; // 替换 'YourFontName' 为你的字体名称
	font-size: 16px;
	color: #333;
`

export default function MiniCard({ card, src, onCloseModal, isbuy = "false", iskeeper }) {
	const { setAccount, Contract } = useWeb3()
	const { isLoading, createActiveCard } = useBuyPlayer({ Contract })

	const id = Number(card[0])
	const option = iskeeper === "true" ? Number(1) : Number(2)
	// console.log(option)
	function handleBuy() {
		// console.log(Contract)
		// console.log(id, option)

		createActiveCard({ id, option })
	}

	return (
		<StyledWindow>
			<StyledText>{iskeeper === "true" ? "keeper" : "player"}</StyledText>
			<Image src={src} alt={iskeeper === "true" ? "keeper" : "player"} />
			<StyleedDiv>
				{isbuy === "true" ? (
					<StyledButton disabled={isLoading} onClick={handleBuy}>
						{isLoading ? "loading..." : "Buy"}
					</StyledButton>
				) : (
					""
				)}
				<StyledButton onClick={onCloseModal}>Return</StyledButton>
			</StyleedDiv>
		</StyledWindow>
	)
}
