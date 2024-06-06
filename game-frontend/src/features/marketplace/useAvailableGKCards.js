import { useQuery } from "@tanstack/react-query"
import { getAvailableGKCards } from "../../services/abiRead.js"

export function useAvailableGKCards({ account }) {
	const { isLoading, data: availableGKCards } = useQuery({
		queryKey: ["availableGKCards"],
		queryFn: getAvailableGKCards,
	})

	return { isLoading, availableGKCards }
}
