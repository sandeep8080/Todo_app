/**
 * ALERT COMPONENT
 * @param {msg,type} message & Message Type 
 * @returns Alert Component
 */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideAlert } from "../react-redux/action";

const Alert = ({ msg, type }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const timeOut = setTimeout(() => {
            dispatch(hideAlert());
        }, 2000);
        return () => clearTimeout(timeOut);
    }, []);
    return <p className={`alert ${type}`} > {msg}</p >
};
export default Alert;