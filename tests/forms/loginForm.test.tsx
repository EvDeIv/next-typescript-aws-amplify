import { render, fireEvent, act } from "@testing-library/react";
import * as nextRouter from "next/router";
import "@testing-library/jest-dom";

import { LoginForm } from "@src/components/organisms/LoginForm";
import { Login } from "@src/components/templates/Login";

//@ts-ignore
nextRouter.useRouter = jest.fn();
//@ts-ignore
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));

describe("Login Page", () => {
	let expectedEmail: string,
		expectedPassword: string,
		expectedSignIn: () => void;

	beforeEach(() => {
		expectedSignIn = jest.fn();

		expectedEmail = "test@gmail.com";
		expectedPassword = "123456678";
	});

	test("should has email/password fields and singIn button", () => {
		const { getByLabelText, getAllByText } = render(<Login />);
		const email = getByLabelText("Email");
		const password = getByLabelText("Password");
		const signInButton = getAllByText("Sign In")?.filter(
			(item) => item.nodeName === "BUTTON"
		)[0];

		expect(email).toBeVisible();
		expect(password).toBeVisible();
		expect(signInButton).toBeVisible();
	});

	test("should call form function when user email and password are valid", async () => {
		const { getByLabelText, getAllByText } = render(
			<LoginForm onSubmit={expectedSignIn} isLoading={false} />
		);
		const email = getByLabelText("Email");
		const password = getByLabelText("Password");
		const signInButton = getAllByText("Sign In")?.filter(
			(item) => item.nodeName === "BUTTON"
		)[0];

		await act(async () => {
			fireEvent.change(email, { target: { value: expectedEmail } });
			fireEvent.change(password, { target: { value: expectedPassword } });
			fireEvent.click(signInButton);
		});

		expect(expectedSignIn).toHaveBeenCalledTimes(1);
		expect(expectedSignIn).toHaveBeenCalledWith({
			email: expectedEmail,
			password: expectedPassword,
		});
	});

	test("should not call form function when user email is invalid", async () => {
		expectedEmail = "test@gmail";

		const { getByLabelText, getAllByText } = render(
			<LoginForm onSubmit={expectedSignIn} isLoading={false} />
		);
		const email = getByLabelText("Email");
		const password = getByLabelText("Password");
		const signInButton = getAllByText("Sign In")?.filter(
			(item) => item.nodeName === "BUTTON"
		)[0];

		await act(async () => {
			fireEvent.change(email, { target: { value: expectedEmail } });
			fireEvent.change(password, { target: { value: expectedPassword } });
			fireEvent.click(signInButton);
		});

		expect(expectedSignIn).toHaveBeenCalledTimes(0);
	});

	test("should not call form function when user password is invalid", async () => {
		expectedPassword = "12";

		const { getByLabelText, getAllByText } = render(
			<LoginForm onSubmit={expectedSignIn} isLoading={false} />
		);
		const email = getByLabelText("Email");
		const password = getByLabelText("Password");
		const signInButton = getAllByText("Sign In")?.filter(
			(item) => item.nodeName === "BUTTON"
		)[0];

		await act(async () => {
			fireEvent.change(email, { target: { value: expectedEmail } });
			fireEvent.change(password, { target: { value: expectedPassword } });
			fireEvent.click(signInButton);
		});

		expect(expectedSignIn).toHaveBeenCalledTimes(0);
	});
});
