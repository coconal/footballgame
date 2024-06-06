import { useQuery } from "@tanstack/react-query"
import { getRequestSentEvent } from "../../services/abiRead.js"

export function useGetsendQuestEvent() {
	const { isPending: isLoading, data: sendrequestevent } = useQuery({
		queryKey: ["sendrequestevent"],
		queryFn: () => getRequestSentEvent(),
	})

	return { isLoading, sendrequestevent }
}
