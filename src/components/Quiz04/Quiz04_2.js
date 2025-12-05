import Quiz04Box from "./Quiz04Box";
import "./Quiz04.css";
import { useState } from "react";

function Quiz04_2() {

    // 1안
    // let[boxArr,setboxArr] =useState([]);

    // 2안
    let [boxArr, setboxArr] = useState([]);

    return (
        <div>
            {/* 1)안 */}
            {/* <div style={{margin : '10px'}}>
            <button onClick={()=>{
                setboxArr([...boxArr, 0]);
            }}>박스추가
            </button></div>
            {
                boxArr.map((item,index)=>{
                    return<Quiz04Box/>
                })
            } */}

            {/* 2)안 */}
            <div style={{ margin: '10px' }}>
                <button onClick={() => {
                    setboxArr([...boxArr, <div className="box">박스</div>])
                }}>박스추가
                </button></div>

            {/* 3)안 */}
            {/* <div style={{ margin: '10px' }}>
                <button onClick={() => {
                    setboxArr([...boxArr, 0]);
                }}>박스추가
                </button></div> */}
            {
                boxArr.map((item, index) => {
                    // 1,3안
                    // return <Quiz04Box />
                    // 2안
                    return item;
                })
            }

        </div>
    );
}
export default Quiz04_2;