import { useQuery } from "@tanstack/react-query"
import { getAvailableCards } from "../../services/abiRead.js"

export function useAvailableCards() {
	const { isLoading, data: availableCards } = useQuery({
		queryKey: ["availableCards"],
		queryFn: getAvailableCards,
	})

	return { isLoading, availableCards }
}
