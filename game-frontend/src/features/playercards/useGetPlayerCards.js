import { useQuery } from "@tanstack/react-query"
import { getPlayerActiveCards } from "../../services/abiRead.js"

export function useGetPlayerCards({ account }) {
	const { isLoading, data: playerCards } = useQuery({
		queryKey: ["playerCards"],
		queryFn: () => getPlayerActiveCards(account),
	})

	return { isLoading, playerCards }
}
