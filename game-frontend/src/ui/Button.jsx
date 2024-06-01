import styled, { css } from "styled-components"

const sizes = {
	small: css`
		font-size: 1.2rem;
		padding: 0.4rem 0.8rem;
		text-transform: uppercase;
		font-weight: 600;
		text-align: center;
	`,
	medium: css`
		font-size: 1.4rem;
		padding: 1.2rem 1.6rem;
		font-weight: 500;
	`,
	large: css`
		font-size: 1.6rem;
		padding: 1.2rem 2.4rem;
		font-weight: 500;
	`,
}

const variations = {
	primary: css`
		color: var(--color-brand-50);
		background-color: var(--color-brand-600);

		&:hover {
			background-color: var(--color-brand-700);
		}
	`,
	secondary: css`
		color: var(--color-grey-600);
		background: var(--color-grey-0);
		border: 1px solid var(--color-grey-200);

		&:hover {
			background-color: var(--color-grey-50);
		}
	`,

	connbt: css`
		height: 50px;
		font-family: "Orbitron", sans-serif;
		letter-spacing: 0.1em;
		margin: 1rem;
		color: rgba(237, 27, 27, 1);
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(10, 30, 60, 0.8);
		border-radius: 1rem;
		padding: 20px;
		font-size: 24px;

		&:hover {
			background-color: rgba(0, 0, 0, 0.8); // 当鼠标指针浮动在按钮上时，背景色变为半透明的黑色
			color: white;
		}
	`,

	connedbt: css`
		font-family: "Orbitron", sans-serif;
		letter-spacing: 0.1em;
		margin: 1rem;
		color: black;
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		background: linear-gradient(to left, blue, red);
		border-radius: 1rem;
		padding: 20px;
		font-size: 24px;
	`,

	joinBt: css`
		background-image: linear-gradient(to left, #ccaee2, blue);
		border-radius: 30px;

		&:hover {
			background-color: #69eded; // 鼠标移动到按钮上时的背景颜色
			color: #69eded; // 鼠标移动到按钮上时的文字颜色
			box-shadow: 0 0 10px #69eded;
		}
	`,
}

const Button = styled.button`
	border: none;
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-sm);

	${(props) => variations[props.variation]}
	${(props) => sizes[props.size]}
`

Button.defaultProps = {
	variation: "primary",
	size: "medium",
}

export default Button
