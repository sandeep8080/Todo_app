/**
 * ALERT COMPONENT
 * @param {mag,type} message & Message Type 
 * @returns Alert Component
 */
import { useEffect } from "react";

const Alert = ({ msg, type, removeAlert }) => {
    useEffect(() => {
        const timeOut = setTimeout(() => {
            removeAlert();
        },2000);
        return () => clearTimeout(timeOut);
    }, []);

    return <p className={`alert ${type}`} > {msg}</p >
};
export default Alert;