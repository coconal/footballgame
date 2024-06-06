const signup = async (contract) => {
	if (!contract) {
		return false
	}
	const tx = await contract.join()
	const ransactionReceipt = await tx.wait()
	return ransactionReceipt
}

const wonPoints = async (contract, account) => {
	if (!contract) {
		return false
	}
	const tx = await contract.wonPoints(account.currentAccount)
	const ransactionReceipt = await tx.wait()
	return ransactionReceipt
}

const buyPlayer = async (contract, id, option) => {
	if (!contract) {
		return false
	}
	const tx = await contract.createActiveCard(id, option)
	const ransactionReceipt = await tx.wait()
	return ransactionReceipt
}

const getRequestRandomWords = async (contract) => {
	if (!contract) {
		return false
	}
	const tx = await contract.requestRandomWords()
	const transactionReceipt = await tx.wait()
	return transactionReceipt
}

const callToss = async (contract, choice) => {
	if (!contract) {
		return false
	}
	const tx = await contract.toss(choice)
	const transactionReceipt = await tx.wait()
	// console.log(transactionReceipt)
	return transactionReceipt
}

const updatePlayerState = async () => {}

const createActiveCard = async (contract, id, option) => {
	if (!contract) {
		return false
	}
	const tx = await contract.createActiveCard(id, option)
	console.log(tx)
	// return tx
	const transactionReceipt = await tx.wait(1)
	return transactionReceipt
}

const resetGame = async () => {}

export {
	wonPoints,
	buyPlayer,
	signup,
	getRequestRandomWords,
	callToss,
	updatePlayerState,
	resetGame,
	createActiveCard,
}
