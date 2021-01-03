const config = {
  DB: process.env.APP_DB,
  PORT: process.env.PORT || 5000,
  SALT: process.env.SALT_ROUNDS,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_DURATION: process.env.ACCESS_TOKEN_DURATION,
  REFRESH_TOKEN_DURATION: process.env.REFRESH_TOKEN_DURATION,
}

export default config;
