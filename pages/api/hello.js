
import React from "react";
import pdfHelper from "../../helper/pdfHelper";

export default async (req, res) => {
  const { files } = req.query
  const fileArray = JSON.parse(files)
  const buffer = await pdfHelper.componentToPDFBuffer(
    <div className="row">
      {(fileArray || []).map((data, index) => (
        <div className="col-md-4" key={index}>
          <img className="img-fluid" src={data.url} alt="..." />
        </div>
      ))}
    </div>
  );

  // prompt to download pdf
  res.setHeader('Content-disposition', 'attachment; filename="article.pdf');

  // set content type
  res.setHeader('Content-Type', 'application/pdf');

  // output the pdf buffer
  res.end(buffer);
}
