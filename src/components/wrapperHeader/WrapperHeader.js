

import Banner from "../banner/Banner";
import Header from "../header/Header";


function WrapperHeader() {
    return ( 
        <div className="wrapper-header">
            <Header />
            <Banner />
        </div>
        

     );
}

export default WrapperHeader;