import { Button } from "bootstrap"

const CardListItem = ({
    groupname,
    number,
    selected,
    func,
}) => {
    const pressed ={
        boxShadow: "inset 0 0 10px #aeaeae",
        borderRadius: '10px',
        background: '#fafafa'
    }

    const unPressed ={
        boxShadow: "0 0 10px #e0e0e0",
        borderRadius: '10px'
    }

    return (
    <div className="m-2 p-5" style={ selected ? pressed : unPressed }>
        <button onClick={() => func(number)} style={ selected ? {fontSize:'200px', color:'orange', border:'none'} : {fontSize:'20px', border:'none', color:'grey', background:'none'} }>
            { groupname }
        </button>
    </div>
    );
}
     
export default CardListItem;