import { useQuery } from "@tanstack/react-query"
import { getAvailableCards } from "../../services/abiRead.js"

export function useAvailableCards({ account }) {
	const { isLoading, data: availableCards } = useQuery({
		queryKey: ["availableCards", account.currentAccount],
		queryFn: getAvailableCards,
	})

	return { isLoading, availableCards }
}
