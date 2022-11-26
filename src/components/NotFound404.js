import { CustomLink } from '../App';

const NotFound404 = () => {
    return (<div className="container-fluid text-center py-5">
        <img src="/images/404.png" alt="" className="img-fluid" />
        <h1 className="mb-5">Page Not Found</h1>
        <CustomLink to="/">
            <button className="btn border-0 text-white fs-4 px-5" style={{ background: "#f7565e" }}>Go to Home</button>
        </CustomLink>
    </div>);
};

export default NotFound404;