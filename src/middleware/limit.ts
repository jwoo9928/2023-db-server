import rateLimit from "express-rate-limit";

const APILimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3,
  message: "1분에 3번만 요청하실 수 있습니다.",
  statusCode: 429, // Too Many Requests
});

export default APILimiter;
