

function Popup({ children, attrs }) {
    return ( 
        <div className="popup" tabIndex="-1" {...attrs}>{children}</div>
     );
}

export default Popup;
