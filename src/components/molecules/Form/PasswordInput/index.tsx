import { forwardRef, useEffect, useState } from "react";

import { InputProps, InputGroup, InputRightElement } from "@chakra-ui/react";
import { browserName } from "react-device-detect";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { Input } from "@src/components/atoms/Input";

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
	(props, ref) => {
		const [showPassword, setShowPassword] = useState<boolean>(false);
		const [currentBrowser, setCurrentBrowser] = useState<string>("");

		useEffect(() => setCurrentBrowser(browserName), []);

		return (
			<InputGroup>
				<Input ref={ref} type={showPassword ? "text" : "password"} {...props} />
				{currentBrowser !== "Edge" && (
					<>
						<InputRightElement onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? (
								<MdVisibilityOff color={"#666666"} size={24} />
							) : (
								<MdVisibility color={"#666666"} size={24} />
							)}
						</InputRightElement>
					</>
				)}
			</InputGroup>
		);
	}
);

PasswordInput.displayName = "PasswordInput";
