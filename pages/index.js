import React from "react";

const Home = () => {
  return (
    <React.Fragment>

      <form action="/api/upload" enctype="multipart/form-data" method="post">
        <div>Text field title: <input type="text" name="title" /></div>
        <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
        <input type="submit" value="Upload" />
      </form>

      <a href="/api/hello?exportPDF=true">create pdf</a>
    </React.Fragment>
  )
}

export default Home