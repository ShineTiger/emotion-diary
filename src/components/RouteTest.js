import {Link} from 'react-router-dom' ;

const RouteTest = () => {
    return (
        <>
            <Link to={"/"}>Home</Link>
            <Link to={"/Edit"}>Edit</Link>
            <Link to={"/Diary"}>Diary</Link>
            <Link to={"/New"}>New</Link>
        </>
    )
}

export default RouteTest;