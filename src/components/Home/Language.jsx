export default function Language({ lang , flag }){
    return (
        <div className="flex gap-2">
            <img src={require(`../../assets/images/language/${flag}.png`)} alt="" height={35} width={35} /> 
            <p className="text-md m-0 self-center"> {lang}</p>
        </div>
    )
}