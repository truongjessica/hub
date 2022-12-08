const GroupCard = ({
    groupname,
    selected,
    func,
}) => {
    const pressed ={
        boxShadow: "inset 0 0 10px #aeaeae",
        borderRadius: '10px',
        background: '#fafafa',
    }

    const unPressed ={
        boxShadow: "0 0 10px #e0e0e0",
        borderRadius: '10px'
    }

    return (
    <div className="m-2 p-5" style={ selected ? pressed : unPressed }>
        <button onClick={() => func(groupname)} style={ selected ? {fontSize:'20px', color:'orange', border:'none', background:'none'} : {fontSize:'20px', color:'grey', border:'none', background:'none'} }>{ groupname }</button>
    </div>
    );
}
     
export default GroupCard;