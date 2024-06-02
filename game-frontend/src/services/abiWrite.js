const signup = async (contract) => {
	if (!contract) {
		return false
	}
	const tx = await contract.join()
	const ransactionReceipt = await tx.wait()
	return ransactionReceipt
}

export { signup }
