import styled from "styled-components"
import { HiWallet } from "react-icons/hi2"

import Logo from "./Logo"
import Button from "./Button"
import HeaderMenu from "./HeaderMenu"
import { useWeb3 } from "../context/Web3Provider"

import { useListeningAccount } from "../hooks/useListeningAccount"

const StyledHeader = styled.header`
	padding: 1.22rem 4.8rem;
	display: flex;
	gap: 2.4rem;
`

const IconTextWrapper = styled.div`
	margin-top: -20px;
	display: flex;
	align-items: center; // 使图标和文本在垂直方向上居中对齐
	gap: 0.5rem; // 设置图标和文本之间的间距
	margin-left: auto;
	padding: 20px;
`

export default function HomeHeader() {
	const { isConnected, account } = useWeb3()

	const { handleConnect } = useListeningAccount()

	return (
		<StyledHeader>
			<Logo />
			<HeaderMenu />
			<IconTextWrapper>
				<Button
					variation={isConnected ? "connedbt" : "connbt"}
					size="medium"
					onClick={handleConnect}
				>
					<HiWallet />
					{isConnected ? `${account.currentAccount.slice(0, 6)}...` : "Connect Wallet"}
				</Button>
			</IconTextWrapper>
		</StyledHeader>
	)
}
