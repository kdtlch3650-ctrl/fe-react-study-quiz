import "./Quiz05.css"
import { useState } from "react";
import Quiz05Box from "./Quiz05Box"

function Quiz05() {

    let [boxArr, setboxArr] = useState([]);


    return (
        <div>
            <button onClick={() => {
                // boxArr.unshift(<div className="box" style={{backgroundColor : 'red'}}>박스</div>);
                setboxArr([<div className="box" style={{ backgroundColor: 'red' }}>박스</div>, ...boxArr]);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                setboxArr([<div className="box" style={{ backgroundColor: 'blue' }}>박스</div>, ...boxArr]);

            }}>앞파란박스추가</button>
            <button onClick={() => {
                setboxArr([<div className="box" style={{ backgroundColor: 'green' }}>박스</div>, ...boxArr]);

            }}>앞초록박스추가</button>

            <button onClick={() => {
                setboxArr([...boxArr, <div className="box" style={{ backgroundColor: 'red' }}>박스</div>]);

            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                setboxArr([...boxArr, <div className="box" style={{ backgroundColor: 'blue' }}>박스</div>]);

            }}>뒤파란박스추가</button>
            <button onClick={() => {
                setboxArr([...boxArr, <div className="box" style={{ backgroundColor: 'green' }}>박스</div>]);

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
export default Quiz05;