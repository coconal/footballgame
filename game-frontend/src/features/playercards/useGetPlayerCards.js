import { useQuery } from "@tanstack/react-query"
import { getPlayerActiveCards } from "../../services/abiRead.js"

export function useGetPlayerCards({ account }) {
	const { isPending: isLoading, data: playerCards } = useQuery({
		queryKey: ["playerCards", account.currentAccount],
		queryFn: () => getPlayerActiveCards(account),
	})

	return { isLoading, playerCards }
}
