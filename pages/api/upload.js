// Backend
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  const promise = new Promise((resolve, reject) => {

    const form = new formidable.IncomingForm();
    form.multiples = true
    form.keepExtensions = true
    form.uploadDir = "./public/upload"
    form.encoding = 'utf8'

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    })

  })

  return promise.then(({ fields, files }) => {
    res.status(200).json({ fields, files })
  })
}