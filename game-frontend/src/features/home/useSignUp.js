import { QueryClient, useMutation } from "@tanstack/react-query"
import { signup as abiSignup } from "../../services/abiWrite"
import toast from "react-hot-toast"

export function useSignUp({ Contract }) {
	const queryClient = new QueryClient()

	const { isPending: isLoading, mutate: signUp } = useMutation({
		mutationFn: () => abiSignup(Contract),
		onSuccess: () => {
			toast.success("Sign up successful")
			queryClient.invalidateQueries("signup")
		},
		onError: () => {
			toast.error("Sign up failed")
		},
	})

	return { isLoading, signUp }
}
