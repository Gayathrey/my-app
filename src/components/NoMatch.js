import {Link} from 'react-router-dom'

const NoMatch = () => {
    return ( 
        <div>
            <h1>OOPSSS</h1>
            <p>Der ser ud som om......</p>
            <p>Klik <Link to="/">her</Link> her for at vende...</p>
        </div>
     );
}
 
export default NoMatch;