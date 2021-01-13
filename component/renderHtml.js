const RenderHtml = (props) => {
    const { fileArray } = props
    return (
        <div className="row">
            {(fileArray || []).map((url, index) => (
                <div className="col-md-4" key={index}>
                    <img className="img-fluid" src={url} alt="..." />
                </div>
            ))}
        </div>
    )
}


export default RenderHtml