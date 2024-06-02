import { useQuery } from "@tanstack/react-query"
import { joinStatus as getJoinStatus } from "../../services/abiRead"

export default function useGetJoinStatus({ account }) {
	const { isLoading, data: joinStatus } = useQuery({
		queryKey: ["joinStatus"],
		queryFn: () => getJoinStatus(account),
	})

	return { isLoading, joinStatus }
}
