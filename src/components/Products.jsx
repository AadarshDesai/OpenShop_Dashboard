import { Link } from "react-router-dom";

export function Products(){
    return <div>
        <p>This is products</p>
        <Link to="/" className="underline">
            go to dashboard
        </Link>
    </div>
}