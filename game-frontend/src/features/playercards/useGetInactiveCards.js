import { useQuery } from "@tanstack/react-query"
import { getInactiveCards } from "../../services/abiRead.js"

export function useGetInactiveCards({ account }) {
	const { isLoading, data: inactiveCards } = useQuery({
		queryKey: ["inactiveCards"],
		queryFn: () => getInactiveCards(account),
	})

	return { isLoading, inactiveCards }
}
