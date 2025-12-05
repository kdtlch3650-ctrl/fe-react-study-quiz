import Quiz04Box from "./Quiz04Box";
import "./Quiz04.css"
import { useState } from "react";
function Quiz04() {

    let [boxArr, setboxArr] = useState([]);


    return (
        <div>
            <br/><button onClick={() => {
                setboxArr([...boxArr, 0]);
            }}>

                추가

            </button><br/><br/>
            {
                boxArr.map((item, index) => {
                    return (
                        <Quiz04Box />
                    );
                })
            }
        </div>
    );

}
export default Quiz04;