import { useQuery } from "@tanstack/react-query"
import { getRoundNumber as abiGetRound } from "../../services/abiRead.js"

export function getRoundNumber() {
	const { isPending: isLoading, data: roundnum } = useQuery({
		queryKey: ["roundnum"],
		queryFn: () => abiGetRound(),
	})

	return { isLoading, roundnum }
}
