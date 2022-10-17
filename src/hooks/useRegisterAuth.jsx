import { useState, useContext } from "react";
import { LoginVerification, getRandomAvatar } from "../helpers/utils/Utils";
import { UserDataContext } from "../contexts/UserDataContext";
import { auth, provider } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";

const useRegisterAuth = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { userCache, setUserCache } = useContext(UserDataContext);

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const name = result.user.displayName;
				const email = result.user.email;
				const profilePic = result.user.photoURL;
				console.log(userCache);
				setUserCache({ username: email, avatar: profilePic, name: name });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			await LoginVerification({ username, password });
			const url = await getRandomAvatar();
			setUsername("");
			setPassword("");
			setError("");
			setUserCache({ username: username, avatar: url, name: "" });
		} catch (error) {
			setError("Incorrect username or password!");
		}
		setIsLoading(false);
	};

	return {
		userCache,
		setUserCache,
		error,
		onSubmit,
		isLoading,
		setPassword,
		setUsername,
		username,
		password,
		signInWithGoogle,
	};
};

export default useRegisterAuth;
