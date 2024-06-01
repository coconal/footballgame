import styled from "styled-components"

const Img = styled.img`
	height: 6.9rem;
	width: auto;
`

export default function Image({ src, ...styledProps }) {
	return <Img src={src} style={styledProps}></Img>
}
