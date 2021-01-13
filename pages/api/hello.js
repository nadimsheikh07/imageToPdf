import React from "react";
import pdfHelper from "../../helper/pdfHelper";

export default async (req, res) => {
  const { query } = req
  const exportPDF = query.exportPDF === 'true';
  const isServer = !!req;
  
  if (isServer && exportPDF) {
    const buffer = await pdfHelper.componentToPDFBuffer(
      <React.Fragment>
        <h1>Hello Pdf</h1>
      </React.Fragment>
    );

    // prompt to download pdf
    res.setHeader('Content-disposition', 'attachment; filename="article.pdf');

    // set content type
    res.setHeader('Content-Type', 'application/pdf');

    // output the pdf buffer
    res.end(buffer);
  }

  res.statusCode = 200
  res.json({ message: 'export done' })
}
