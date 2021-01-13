// Backend
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./upload";
  form.keepExtensions = true;
  await form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
  });
};