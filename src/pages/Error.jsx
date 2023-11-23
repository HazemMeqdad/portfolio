import { Link } from "react-router-dom";
import "../css/Error.css"

const Error = () => {
    return (
        <>
            <section >
                <h1>4<span>0</span>4</h1>
                <div className="text-container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates expedita reprehenderit perferendis modi consequuntur cumque molestiae praesentium fuga, provident odit sed atque ea blanditiis exercitationem delectus, hic totam nostrum!</p>
                </div>
                <div className="btn-container">
                    <Link to="/"><button className="btn btn-color-2">Home</button></Link>
                </div>
            </section>
        </>
    )
}

export default Error;
