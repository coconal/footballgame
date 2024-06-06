import { ethers } from "ethers"
import { abi } from "../contracts/contracts/footballgame.sol/Web3Football.json"
import { InfuraProvider } from "ethers"

const provider = new InfuraProvider("sepolia", "019871599f4e48e7973dc8cc4e9c1938")
const contractAddress = "0x3530162dc74d89a6d98Fe40f89280FB68CCF4822"
const contract = new ethers.Contract(contractAddress, abi, provider)

const getRequestSentEvent = async () => {
	if (!contract) {
		return false
	}
	const block = await provider.getBlockNumber() //type of Number
	const event = await contract.queryFilter("RequestSent", block - 10, block)
	// return block
	return event
}

const getAvailableCards = async () => {
	const cards = await contract.getAvailableCards()
	return cards
}

const getAvailableGKCards = async () => {
	const cards = await contract.getAvailableGKCards()
	return cards
}

const getLastId = async () => {
	if (!contract) {
		return false
	}
	const t = await contract.contractlastRequestId()
	return t
}

const getStatus = async (id) => {
	if (!contract) {
		return false
	}
	const t = await contract.getRequestStatus(id)
	return t
}

const getWinOrLose = async () => {
	if (!contract) {
		return false
	}
	const t = await contract.winOrLoss()
	return t
}

const getInterface = async (account, shootNumber, playerState) => {
	if (!contract) {
		return false
	}
	const t = await contract.interface_Selection(shootNumber, playerState, account.currentAccount)
	return t
}

const getPlayerState = async () => {
	if (!contract) {
		return false
	}
	const t = await contract.playerState()
	return t
}

const getPlayerScore = async () => {
	if (!contract) {
		return false
	}
	const t = await contract.team1Score()
	return t
}

const getComputerScore = async () => {
	if (!contract) {
		return false
	}
	const t = await contract.team2Score()
	return t
}

const checkResult = async (team1Score, team2Score, shootNumber, playerState) => {
	if (!contract) {
		return false
	}
	const t = await contract.round_result_check(team1Score, team2Score, shootNumber, playerState)

	return t
}

const getRoundNumber = async () => {
	if (!contract) {
		return false
	}
	const t = await contract.roundNumber()
	return t
}

const penaltyShoot = async (interFace, option, shootNumber) => {
	if (!contract) {
		return false
	}
	const t = await contract.penalty_shoot(interFace, option, shootNumber)
	return t
}

const joinStatus = async (account) => {
	if (!contract) {
		return false
	}
	const t = await contract.joinStatus(account.currentAccount)
	return t
}

const getPlayerActiveCards = async (account) => {
	if (!contract) {
		return false
	}
	const t = await contract.getPlayingCards(account.currentAccount)
	return t
}

const getPlayerActiveGKCard = async (account) => {
	if (!contract) {
		return false
	}
	const t = await contract.playerActiveGKCard(account.currentAccount)
	return t
}

const getInactiveCards = async (account) => {
	if (!contract) {
		return false
	}
	const t = await contract.getInactiveCards(account.currentAccount)
	return t
}

const getPlayerPoints = async (account) => {
	if (!contract) {
		return false
	}
	const t = await contract.playerPoints(account.currentAccount)
	return t
}

export {
	getInactiveCards,
	getPlayerPoints,
	getAvailableCards,
	getPlayerActiveGKCard,
	getPlayerActiveCards,
	joinStatus,
	penaltyShoot,
	getLastId,
	getStatus,
	getWinOrLose,
	getInterface,
	getPlayerState,
	getComputerScore,
	getPlayerScore,
	checkResult,
	getRoundNumber,
	getAvailableGKCards,
	getRequestSentEvent,
}
