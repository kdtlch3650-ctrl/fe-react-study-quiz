import { useState } from "react";


function Quiz() {
    let [textArr, setTextArr] = useState(['하나', '둘', '셋']);
    // let textArr = ['하나', '둘', '셋'];
    let [count, setCount] = useState(0);
    return (
        <div className="App">
            <p>{textArr[count]}</p>
            <button onClick={() => {
                setCount((count + 1) % textArr.length);
            }}>변경버튼</button>

            <button onClick={() => {

                setTextArr([...textArr, '넷']);
            }}>
                넷 추가
            </button>

        </div>
    );
}

export default Quiz;