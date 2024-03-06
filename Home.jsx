import { Link } from 'react-router-dom';
function Home(){
    return (
        <div className="homeBody">
            <div className="linkBlock">
                <Link to = "/">Home</Link>
                <Link to = "/order">Shop</Link>
                <Link to = "/registration">Registration</Link>
            </div>
            <h2 className="introduction-title">Welcome to Beaver Mart!</h2>
            <p>Shop For What You Need</p>
            <p>Register For Promotions</p>
        </div>
    );
}

export default Home;