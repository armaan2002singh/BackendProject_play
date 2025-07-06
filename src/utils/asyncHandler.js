const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export { asyncHandler };

// higher order function - can accept functions as a parameter and can return then. treat them as variable.

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next)
//   } catch (error) {
//     // console.log("error in the utils ::", error);
//     // throw error
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
//how it is working--> function which further passed into next function.
// const asyncHandler= ()=>{}
// const asyncHandler= (fn)=>{()={}}
// const asyncHandler= (fn)=>()={} // i want to use it as async-->
// const asyncHandler= (fn)=>async()={}
