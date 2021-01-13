import React, { useState } from "react";

const Home = () => {
  const [fileArray, setFileArray] = useState()

  const uploadMultipleFiles = (e) => {
    let fileObj = []
    let fileArray = []
    fileObj.push(e.target.files)
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]))
    }
    setFileArray(fileArray)
  }

  const uploadFiles = (e) => {
    e.preventDefault()

    window.location.replace(`/api/hello?files=${JSON.stringify(fileArray)}`)

  }


  console.log('fileArray', fileArray)


  return (
    <React.Fragment>

      <form>
        <div className="form-group multi-preview">

          <div className="row">
            {(fileArray || []).map((url, index) => (
              <div className="col-md-4" key={index}>
                <img className="img-fluid" src={url} alt="..." />
              </div>
            ))}
          </div>

        </div>

        <div className="form-group">
          <input type="file" className="form-control" onChange={uploadMultipleFiles} multiple />
        </div>
        <button type="button" className="btn btn-danger btn-block" onClick={uploadFiles}>Create PDF</button>
      </form>
    </React.Fragment>
  )
}

export default Home