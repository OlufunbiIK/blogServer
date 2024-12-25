const cors = require("cors");
const allowedOrigins = [
  "http://localhost:9000/blogs", // Local development
  "https://blog-chi-kohl.vercel.app/", // Production
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
