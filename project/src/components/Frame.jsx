const Frame = ({ header, body, footer }) => {
    return <div className="grid grid-flow-col grid-rows-12 h-screen">
        <div className="row-span-5 bg-zinc-900 ml-5 mr-5">
            {/* Header */}
            {header}
        </div>
        <div className="row-span-6 bg-zinc-800">
            {/* body */}
            {body}
        </div>
        <div className="row-span-1 bg-zinc-700 ml-5 mr-5">
            {/* footer */}
            {footer}
        </div>
    </div>
}

export default Frame