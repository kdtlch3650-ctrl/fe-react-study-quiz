import { useState } from "react";


function Quiz_reviwe(){

    let[txt, setTxt] = useState('하나');

    return(
        <div className="App">
            <p>{txt}</p>
            <button onClick={()=>{
                if(txt == '하나')
                    setTxt('둘');
                if(txt == '둘')
                    setTxt('셋');
                if(txt == '셋')
                    setTxt('하나');
            }}>변경버튼</button>
        </div>
    )
}

export default Quiz_reviwe;