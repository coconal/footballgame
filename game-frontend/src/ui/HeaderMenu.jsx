import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import ButtonIcon from "./ButtonIcon"
import { HiMiniRectangleStack, HiOutlineGlobeAsiaAustralia, HiCircleStack } from "react-icons/hi2"

const StyledHeaderMenu = styled.ul`
	display: flex;
	font-size: 1.4rem;
	gap: 0.4rem;
	list-style: none;
`

const FontStyled = styled.div`
	font-family: "Orbitron", sans-serif; // 设置字体为 Orbitron
	letter-spacing: 0.1em; // 设置字间距
	text-decoration: underline solid 1px; // 设置下划线
	text-underline-offset: 4px; // 设置下划线偏移
	background-clip: text; // 设置背景剪裁为文本
	color: transparent; // 设置文本颜色为透明
	background-image: linear-gradient(to left, blue, red); // 设置背景渐变
	font-weight: bold; // 设置字体粗细为粗体

	&:hover {
		text-decoration-color: red; // 设置鼠标悬停时的下划线颜色
	}
`
const IconTextWrapper = styled.div`
	display: flex;
	align-items: center; // 使图标和文本在垂直方向上居中对齐
	gap: 0.5rem; // 设置图标和文本之间的间距
`

export default function HeaderMenu() {
	const navigate = useNavigate()

	return (
		<StyledHeaderMenu>
			<li>
				<ButtonIcon onClick={() => navigate("/Carts")}>
					<IconTextWrapper>
						<HiMiniRectangleStack color="red" />
						<FontStyled>My Carts</FontStyled>
					</IconTextWrapper>
				</ButtonIcon>
			</li>
			<li>
				<ButtonIcon onClick={() => navigate("/MarketPlace")}>
					<IconTextWrapper>
						<HiOutlineGlobeAsiaAustralia color="red" />
						<FontStyled>MarketPlace</FontStyled>
					</IconTextWrapper>
				</ButtonIcon>
			</li>
			<li>
				<ButtonIcon>
					<IconTextWrapper>
						<HiCircleStack color="red" />
						<FontStyled>X Points</FontStyled>
					</IconTextWrapper>
				</ButtonIcon>
			</li>
		</StyledHeaderMenu>
	)
}
