import { QueryClient, useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

import { createActiveCard as abiCreateActiveCard } from "../../services/abiWrite"

//option === 1 keeper  ||| option === 2 player
export function useBuyPlayer({ Contract }) {
	const queryClient = new QueryClient()

	const { isPending: isLoading, mutate: createActiveCard } = useMutation({
		mutationFn: ({ id, option }) => {
			// console.log(id, option)
			if (!Contract) {
				throw new Error("Contract is undefined")
			}
			const result = abiCreateActiveCard(Contract, id, option)
			if (!result) {
				throw new Error("abiCreateActiveCard did not return a Promise")
			}
			return result
		},
		onSuccess: () => {
			toast.success("createActiveCard successful")
			queryClient.invalidateQueries({
				queryKey: ["availableCards", "availableGKCards"],
			})
		},
		onError: (error) => {
			toast.error("createActiveCard failed")
			console.error(error)
		},
	})

	return { isLoading, createActiveCard }
}
