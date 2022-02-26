import { toast } from 'react-toastify';

export enum notificationTypes {
	Warn = "WARNING",
	Err = "ERROR",
	Success = "SUCCESS"
} 

export const showNotification:Function = (message: string, type: notificationTypes) => {

	switch(type) {
		case notificationTypes.Success:
			toast.success(message, {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			break;
		case notificationTypes.Warn:
			toast.warn(message, {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			break;
		case notificationTypes.Err:
			toast.error(message, {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			break;
		default:
			break;
	}
	console.log(message, type);		
}