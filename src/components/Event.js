const Event =({date, content})=>{
    return <div className="my-3 font-bold text-2xl font-optima">
        <span className={'text-main mr-4'}>{date}</span><span>{content}</span>
    </div>
}

export default Event

