import { useQuery } from "@tanstack/react-query"
import { getPlayerPoints } from "../../services/abiRead"

export function useGetPoints({ account }) {
	const {
		isLoading,
		data: playerpoints,
		refetch,
	} = useQuery({
		queryKey: ["playerpoints", account.currentAccount],
		queryFn: () => getPlayerPoints(account),
	})

	return { isLoading, playerpoints, refetch }
}
