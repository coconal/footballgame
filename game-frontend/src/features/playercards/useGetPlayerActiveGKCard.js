import { useQuery } from "@tanstack/react-query"
import { getPlayerActiveGKCard } from "../../services/abiRead.js"

export function useGetPlayerActiveGKCard({ account }) {
	const { isPending: isLoading, data: playerActiveGKCard } = useQuery({
		queryKey: ["playerGKCard", account.currentAccount],
		queryFn: () => getPlayerActiveGKCard(account),
	})

	return { isLoading, playerActiveGKCard }
}
