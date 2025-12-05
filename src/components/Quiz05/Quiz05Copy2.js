import "./Quiz05.css"
import { useState } from "react";
import Quiz05Box from "./Quiz05Box"

function Quiz05Copy2() {

    let [boxArr, setboxArr] = useState([]);


    return (
        <div>
            <button onClick={() => {
                setboxArr([{backgroundColor : 'red'}, ...boxArr]);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                setboxArr([{backgroundColor : 'blue'}, ...boxArr]);
            }}>앞파란박스추가</button>
            <button onClick={() => {
                setboxArr([{backgroundColor : 'green'}, ...boxArr]);
            }}>앞초록박스추가</button>
            <button onClick={() => {
                setboxArr([...boxArr,{backgroundColor : 'red'}]);
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                setboxArr([...boxArr,{backgroundColor : 'blue'}]);
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                setboxArr([...boxArr,{backgroundColor : 'green'}]);
            }}>뒤초록박스추가</button>
            <br /><br />
            
            {
                boxArr.map((item, index) => {
                    return (
                        <Quiz05Box sty={item}/>
                    );
                })
            }

        </div>
    );

}
export default Quiz05Copy2;