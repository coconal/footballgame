import { callToss } from "../../services/abiWrite"
import { getWinOrLose } from "../../services/abiRead"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

export function useCallToss({ Contract }) {
	const { isPending: isLoading, mutate: getWinorLoss } = useMutation({
		mutationFn: async ({ choice }) => {
			const receipt = await callToss(Contract, Number(choice))
			if (receipt.status === 1) {
				const winOrLoss = await getWinOrLose()
				// console.log(winOrLoss)
				return winOrLoss
			} else {
				return
			}
		},

		onError: (error) => {
			toast.error("get winOrLoss failed")
			console.error(error)
		},
	})

	return { isLoading, getWinorLoss }
}
