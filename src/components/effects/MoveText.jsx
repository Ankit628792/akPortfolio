

const MoveText = ({ text, group, finalTextClass = "", initalTextClass = "", wrapperClass = "" }) => {
    return (
        <div className={"h-full overflow-hidden cursor-pointer w-full max-w-max relative z-10 inline-flex text-center " + (group ? 'group' : '') + " " + wrapperClass}>
            <h1 className="opacity-0">{text}</h1>
            <div
                className="absolute top-0 left-0 w-full transform group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out">
                <h1 className={initalTextClass}>{text}</h1>
                <h1 className={finalTextClass}>{text}</h1>
            </div>
        </div>
    )
}

export default MoveText