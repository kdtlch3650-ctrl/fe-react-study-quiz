import { useState } from "react";

function Quiz01() {


    let [even, seteven] = useState(0);
    return (
        <div>

            <button onClick={() => {
                seteven(even + 2)
            }}>짝수출력</button>
            <span style={{ color: 'red' }}>{even}</span>

        </div>
    );
}

export default Quiz01;