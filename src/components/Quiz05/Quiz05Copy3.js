import "./Quiz05.css"
import { useState } from "react";
import Quiz05Box2 from "./Quiz05Box2"

function Quiz05Copy2() {

    let [boxArr, setboxArr] = useState([]);


    return (
        <div>
            <button onClick={() => {
                setboxArr(['red', ...boxArr]);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                setboxArr(['blue', ...boxArr]);
            }}>앞파란박스추가</button>
            <button onClick={() => {
                setboxArr(['green', ...boxArr]);
            }}>앞초록박스추가</button>
            <button onClick={() => {
                setboxArr([...boxArr,'red']);
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                setboxArr([...boxArr,'blue']);
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                setboxArr([...boxArr,'green']);
            }}>뒤초록박스추가</button>
            <br /><br />
            
            {
                boxArr.map((item, index) => {
                    return (
                        <Quiz05Box2 sty={item}/>
                    );
                })
            }

        </div>
    );

}
export default Quiz05Copy2;