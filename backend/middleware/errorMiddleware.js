const notFound = (req, res, next) => {
   console.log("inside notfound middleware");
   const error = new Error(`Not Found - ${req.originalUrl}`);
   res.status(404);
   next(error);
};

const errorHandler = (err, req, res, next) => {
   console.log("inside error handler");
   let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
   console.log(err.message);
   let message = err.message;

   if (err.name === "CastError" && err.kind === "ObjectId") {
      statusCode = 404;
      message = "Resource  not found";
   }

   res.status(statusCode).json({
      message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
   });
};

export { notFound, errorHandler };
