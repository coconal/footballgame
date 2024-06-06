import { useQuery } from "@tanstack/react-query"
import { joinStatus as getJoinStatus } from "../../services/abiRead"

export function useGetJoinStatus({ account }) {
	const { isLoading, data: joinStatus } = useQuery({
		queryKey: ["joinStatus", account.currentAccount],
		queryFn: () => getJoinStatus(account),
	})

	return { isLoading, joinStatus }
}
