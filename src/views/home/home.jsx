import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            home
            <Link to="/chat">Go to chat page</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
