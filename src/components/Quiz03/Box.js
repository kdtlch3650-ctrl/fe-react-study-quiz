

function Box({probs}){
    return(
        <div className='textItem'>
                <p className='title'>제목 : {probs.tArr}</p>
                <p>내용 : {probs.cArr}</p>
            </div>
    );
}

export default Box;