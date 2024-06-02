import { HashLoader } from "react-spinners"

import styled from "styled-components"

const Stylediv = styled.div`
	position: fixed; // 使用固定定位
	top: 50%; // 从顶部开始的位置为 50%
	left: 50%; // 从左边开始的位置为 50%
	transform: translate(-50%, -50%); // 使用 transform 将 Spinner 移动到正中间
	z-index: 9999; // 使用 z-index 确保 Spinner 在其他元素之上

	width: 6.4rem;
	aspect-ratio: 1;
	border-radius: 50%;
	background:
		radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000) top/10px 10px no-repeat,
		conic-gradient(#0000 30%, var(--color-brand-600));

	&:before {
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`

export default function Spinner() {
	return (
		<Stylediv>
			<HashLoader color="#36d7b7" size={100} />
		</Stylediv>
	)
}
