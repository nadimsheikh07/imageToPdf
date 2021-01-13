
import React from "react";
import pdfHelper from "../../helper/pdfHelper";
import RenderHtml from "../../component/renderHtml"

export default async (req, res) => {
  const { files } = req.query
  const fileArray = JSON.parse(files)
  const buffer = await pdfHelper.componentToPDFBuffer(
    <RenderHtml fileArray={fileArray} />
  );

  // prompt to download pdf
  res.setHeader('Content-disposition', 'attachment; filename="article.pdf');

  // set content type
  res.setHeader('Content-Type', 'application/pdf');

  // output the pdf buffer
  res.end(buffer);
}
