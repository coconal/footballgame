import { useQuery } from "@tanstack/react-query"
import { checkResult as abiCheckResult } from "../../services/abiRead.js"

export function useCheckResult(params) {
	const { playerScore, computerScore, shootNumber, currentPlayerState } = params
	// console.log(params)
	const {
		data: checkResult,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["checkresult", params],
		queryFn: () => abiCheckResult(playerScore, computerScore, shootNumber, currentPlayerState),
	})

	return { isLoading, checkResult }
}
