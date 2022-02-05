const catchAsyncError = require("../middleware/catchAsyncErrors");
exports.sampleController = catchAsyncError(async (req, res, next) => {
  console.log("Logged In");
  res.status(200).json({
    msg: "working",
  });
});
