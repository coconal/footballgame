import styled from "styled-components"
import interfacejpg from "../assets/interface.jpg"

const StyledInterfaceComponent = styled.div`
	background: url(${interfacejpg}) no-repeat center center/cover;
	height: 400px;
	display: flex;
	flex-direction: column;
`

const StyledButton = styled.button`
	background: transparent;
	border: none;

	div {
		font-weight: 600;
		font-size: 1rem;
		color: white;
		background: rgba(0, 0, 0, 0.5);
		width: 300px; // Increase this to make the div wider
		height: 200px;
		margin-left: 3px;
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			color: white;
			background: rgba(0, 128, 0, 0.3);
		}
	}
`

const StyledButtonTwo = styled.button`
	background: transparent;
	border: none;

	div {
		font-weight: 600;
		font-size: 1rem;
		color: white;
		background: rgba(0, 0, 0, 0.5);
		width: 210px;
		height: 120px;
		margin-left: 3px;
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			color: white;
			background: rgba(0, 128, 0, 0.3);
		}
	}
`

const StyledButtonThree = styled.button`
	background: transparent;
	border: none;

	div {
		font-weight: 600;
		font-size: 1rem;
		color: white;
		background: rgba(0, 0, 0, 0.5);
		width: 180px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			color: white;
			background: rgba(0, 128, 0, 0.3);
		}
	}
`

const InterfaceComponent = ({ interFace, onClickShoot }) => {
	// console.log(interFace)
	if (interFace.value === 1) {
		return <InterfaceOne onClickShoot={onClickShoot} />
	} else if (interFace.value === 2) {
		return <InterfaceTwo onClickShoot={onClickShoot} />
	} else {
		return <InterfaceThree onClickShoot={onClickShoot} />
	}
}

const InterfaceOne = ({ onClickShoot }) => {
	// console.log(onClickShoot)
	return (
		<StyledInterfaceComponent>
			<div style={{ display: "flex", justifyContent: "space-between", marginRight: "0.75rem" }}>
				<StyledButton onClick={() => onClickShoot(1)}>
					<div>1</div>
				</StyledButton>
				<StyledButton onClick={() => onClickShoot(2)}>
					<div>2</div>
				</StyledButton>
			</div>
		</StyledInterfaceComponent>
	)
}

const InterfaceTwo = ({ onClickShoot }) => {
	return (
		<StyledInterfaceComponent>
			<div style={{ display: "flex", justifyContent: "space-between", marginRight: "0.75rem" }}>
				<StyledButtonTwo onClick={() => onClickShoot(1)}>
					<div>1</div>
				</StyledButtonTwo>
				<StyledButtonTwo onClick={() => onClickShoot(2)}>
					<div>2</div>
				</StyledButtonTwo>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginRight: "0.75rem",
					marginTop: "0.5rem",
				}}
			>
				<StyledButtonTwo onClick={() => onClickShoot(3)}>
					<div>3</div>
				</StyledButtonTwo>
				<StyledButtonTwo onClick={() => onClickShoot(4)}>
					<div>4</div>
				</StyledButtonTwo>
			</div>
		</StyledInterfaceComponent>
	)
}

const InterfaceThree = ({ onClickShoot }) => {
	return (
		<StyledInterfaceComponent>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<StyledButtonThree onClick={() => onClickShoot(1)}>
					<div>1</div>
				</StyledButtonThree>
				<StyledButtonThree onClick={() => onClickShoot(2)}>
					<div>2</div>
				</StyledButtonThree>
				<StyledButtonThree onClick={() => onClickShoot(3)}>
					<div>3</div>
				</StyledButtonThree>
				<StyledButtonThree onClick={() => onClickShoot(4)}>
					<div>4</div>
				</StyledButtonThree>
			</div>
			<div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
				<StyledButtonThree onClick={() => onClickShoot(5)}>
					<div>5</div>
				</StyledButtonThree>
				<StyledButtonThree onClick={() => onClickShoot(6)}>
					<div>6</div>
				</StyledButtonThree>
				<StyledButtonThree onClick={() => onClickShoot(7)}>
					<div>7</div>
				</StyledButtonThree>
				<StyledButtonThree onClick={() => onClickShoot(8)}>
					<div>8</div>
				</StyledButtonThree>
			</div>
		</StyledInterfaceComponent>
	)
}

export default InterfaceComponent
