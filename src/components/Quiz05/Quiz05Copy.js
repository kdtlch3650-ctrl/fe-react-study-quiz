import "./Quiz05.css"
import { useState } from "react";
import Quiz05Box from "./Quiz05Box"

function Quiz05Copy() {

    let [boxArr, setboxArr] = useState([]);


    return (
        <div>
            <button onClick={() => {
                let temp = [...boxArr];
                temp.unshift(<div className="box" style={{ backgroundColor: 'red' }}>박스</div>)
                setboxArr([temp]);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let temp = [...boxArr];
                temp.unshift(<div className="box" style={{ backgroundColor: 'blue' }}>박스</div>)
                setboxArr([temp]);
            }}>앞파란박스추가</button>
            <button onClick={() => {
                let temp = [...boxArr];
                temp.unshift(<div className="box" style={{ backgroundColor: 'green' }}>박스</div>)
                setboxArr([temp]);
            }}>앞초록박스추가</button>

            <button onClick={() => {
                let temp = [...boxArr];
                temp.push(<div className="box" style={{ backgroundColor: 'red' }}>박스</div>)
                setboxArr([temp]);
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                let temp = [...boxArr];
                temp.push(<div className="box" style={{ backgroundColor: 'blue' }}>박스</div>)
                setboxArr([temp]);
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                let temp = [...boxArr];
                temp.push(<div className="box" style={{ backgroundColor: 'green' }}>박스</div>)
                setboxArr([temp]);
            }}>뒤초록박스추가</button>
            <br /><br />
            {/* <br /><button onClick={() => {
                setboxArr([...boxArr, 0]);
            }}>

                추가

            </button><br /><br /> */}
            {
                boxArr.map((item, index) => {
                    return item;
                })
            }

        </div>
    );

}
export default Quiz05Copy;