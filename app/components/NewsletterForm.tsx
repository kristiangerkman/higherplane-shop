import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

import type { FieldData } from "~/actions/handleFormSubmit";
import { handleFormSubmit } from "~/actions/handleFormSubmit";
import { showNotification, notificationTypes } from "~/actions/notifications"

export interface Props {
	msg: string
}

export default function NewsletterForm(props: Props) {
	


	const inputField = [{
      placeholder: "Type here...",
      label: "E-MAIL",
      id: "email",
	  required: true,
	}]

	return (
		<div>
			<form onSubmit={(e) => handleFormSubmit(e, inputField, (message:string, type:notificationTypes) => showNotification(message, type))}>
				<p className="text-center text-small font-bold">{props.msg}</p>
				<InputField id={inputField[0].id} placeholder={inputField[0].placeholder} label={inputField[0].label} />
				
				<Button text="SUBSCRIBE" />
			</form>
		</div>
	)
}