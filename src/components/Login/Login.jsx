import useRegisterAuth from "../../hooks/useRegisterAuth";
import {  Button, Input} from "@nextui-org/react";

export default function LoginPlain() {
	const {
		userCache,
		setUserCache,
		error,
		onSubmit,
		isLoading,
		setPassword,
		setUsername,
		username,
		password,
	} = useRegisterAuth();

	return (
		<div className='Login'>
			<div className='Login-container'>
				{userCache?.username ? (
					<>
						<h1> Hello {userCache.username}!</h1>
						<Button onClick={() => setUserCache({})}>Log Out</Button>
					</>
				) : (
					<form className='form' onSubmit={onSubmit}>
						{error && <p className='error'>{error}</p>}
						<p className='please_login'>Please Login!</p>
						<Input
						  clearable
						  underlined
							type='text'
							placeholder='username'
							autoComplete='new-username'
							value={username}
							onChange={(e) => setUsername(e.currentTarget.value)}
						/>
						<Input
						clearable
						underlined
							type='password'
							placeholder='password'
							autoComplete='new-password'
							value={password}
							onChange={(e) => setPassword(e.currentTarget.value)}
						/>
						<Button className='submit' type='submit' disabled={isLoading}>
							{isLoading ? "Logging in..." : "Login In"}
						</Button>
					</form>
				)}
			</div>
		</div>
	);
}
