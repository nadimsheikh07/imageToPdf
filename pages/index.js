import axios from "axios";
import React, { useState } from "react";
import RenderHtml from "../component/renderHtml"
const Home = () => {
  const [fileArray, setFileArray] = useState()
  const [fileObj, setFileObj] = useState()

  const uploadMultipleFiles = (e) => {
    let fileObj = []
    let fileArray = []
    fileObj.push(e.target.files)
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]))
    }
    setFileObj(e.target.files)
    setFileArray(fileArray)
  }


  const uploadFiles = (e) => {
    e.preventDefault()
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    const data = new FormData();
    data.append('file', fileObj[0]);
    axios.post('/api/upload', data, config).then((res) => {
      console.log(res);
    });
    // window.location.replace(`/api/hello?files=${JSON.stringify(fileArray)}`)

  }

  return (
    <React.Fragment>

      <form enctype="multipart/form-data">
        <div className="form-group multi-preview">

          <RenderHtml fileArray={fileArray} />

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