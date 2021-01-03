import * as jwt from '../utils/jwt';

export function authenticate(req, res, next){
  const authHeader = req.headers['authorization'];
  
  const token = authHeader && authHeader.split(' ')[1];

  if(!token) return res.status(401).json({msg: 'No token in header.'});

  try{
    // Verify token
    const decoded = jwt.verifyAccessToken(token);

    // Add user from payload
    req.user = decoded;
    next();
  }catch(err){
    res.status(400).json({ msg: 'Token is not valid' , err: err})
  }
}
