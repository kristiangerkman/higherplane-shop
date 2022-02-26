import { notificationTypes } from "./notifications";
export interface FieldData {
	id: string,
	label?: string,
	required: boolean,
}

interface notificationHandler {
	(type: notificationTypes, message?: string) : void,
}

interface notification {
	message: string,
	type: notificationTypes,
}

export const handleFormSubmit = async (e:any, fieldData:Array<FieldData>, notificationHandler?:notificationHandler) => {
	e.preventDefault();
	// could be given as input / defaults and then merge the ones coming from input i.e SUCCESS: "message" overrides the default success one
	const availableNotifications = {
		[notificationTypes.Success]: { message: "Form succesfully submitted", type: notificationTypes.Success },
		[notificationTypes.Warn]: { message: "Warning! You didn't fill all the form fileds or they were incomplte", type: notificationTypes.Warn },
		[notificationTypes.Err]: { message: "Error happned while submitting form", type: notificationTypes.Err },
	};
	const notifications:notification[] = []
	
	await fieldData.forEach((element:any) => {
		// TODO: Post somewhere, and trigger submitted event
		if (element.required && !e.target[element.id].value) {
			notifications.push(availableNotifications[notificationTypes.Err])
			console.log(e.target[element.id].value)
		} else {
			notifications.push(availableNotifications[notificationTypes.Success])
		}
		// notifications.push(availableNotifications[notificationTypes.Err])
		// notifications.push(availableNotifications[notificationTypes.Warn])
	});

	if (notificationHandler && notifications.length > 0) {
		notifications.forEach((notif) => {
			notificationHandler(notif.type, notif.message);
		})
	}
}