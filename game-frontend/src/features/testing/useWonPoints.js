import toast from "react-hot-toast"
import { wonPoints as abiWonPoints } from "../../services/abiWrite"
import { useMutation } from "@tanstack/react-query"

export function useWonPoints({ Contract, setIsDepositing }) {
	const { isPending: isLoading, mutate: wonPoints } = useMutation({
		mutationFn: ({ account }) => abiWonPoints(Contract, account),
		onSuccess: () => {
			toast.success("get point successful")
			setIsDepositing(true)
		},
		onError: (error) => {
			setIsDepositing(false)
			toast.error("send failed")
			console.error(error)
		},
	})

	return { isLoading, wonPoints }
}
