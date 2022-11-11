import {useEffect, useState} from "react";
import './ScrollTop.css';

export default function ScrollTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setShow(window.scrollY > 0);
        }
    }, []);

    const handleAnchorClick = (event) => {
        event.preventDefault();
        window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
    }

    return (
        <span
            className={`scroll-top ${show ? 'display' : ''}`}
            onClick={handleAnchorClick}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 32 32"
                ><path className="scroll-to-top-btn-icon" d="M30,22.656l-14-13-14,13" /></svg
            >
        </span>
    )
}
