import { useQuery } from "@tanstack/react-query"
import { getInterface } from "../../services/abiRead.js"

export function useGetInterface(params) {
	const { account, shootNumber, currentPlayerState } = params
	// console.log(account, shootNumber, currentPlayerState)
	const {
		data: interfacedata,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["interface", params],
		queryFn: () => getInterface(account, shootNumber, currentPlayerState),
	})

	return { isLoading, interfacedata, error }
}
