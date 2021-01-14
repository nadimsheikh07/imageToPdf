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

    const data = new FormData();

    for (let index = 0; index <= fileObj.length; index++) {
      const element = fileObj[index];
      data.append('file', element)
    }

    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post('/api/upload', data, config).then((res) => {
      if (res.status == 200) {
        let fileArray = []
        if (res.data && res.data.file) {
          res.data.file.forEach(element => {
            fileArray.push({
              url: `http://localhost:3000/${element.path.replace('public/', '')}`
            })
          });
        }
        console.log('fileArray', fileArray)
        window.location.replace(`/api/hello?files=${JSON.stringify(fileArray)}`)
      }
    });

  }

  return (
    <div className="container">

      <form>
        <div className="form-group multi-preview">

          <RenderHtml fileArray={fileArray} />

        </div>

        <div className="form-group">
          <input type="file" className="form-control" onChange={uploadMultipleFiles} multiple />
        </div>
        <button type="button" className="btn btn-danger btn-block" onClick={uploadFiles}>Create PDF</button>
      </form>
    </div>
  )
}

export default Home