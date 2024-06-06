import { useQuery } from "@tanstack/react-query"
import { getInactiveCards } from "../../services/abiRead.js"

export function useGetInactiveCards({ account }) {
	const { isPending: isLoading, data: inactiveCards } = useQuery({
		queryKey: ["inactiveCards", account.currentAccount],
		queryFn: () => getInactiveCards(account),
	})

	return { isLoading, inactiveCards }
}
