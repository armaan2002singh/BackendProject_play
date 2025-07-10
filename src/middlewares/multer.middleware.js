import multer from "multer"; // read documentation.

//we are using here the disk storage.

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //req is from user (in this can configure the json data, but not file. So, file is present of multer)
    // file(all file) is from multer
    // cb - just a callback
    cb(null, "public/temp");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); //unique value generator
    //cb(null, file.filename + '-' + uniqueSuffix)
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

export const upload = multer({
  //storage: storage, // if using the ES6 then no need add same named
  storage,
});
