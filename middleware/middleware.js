export function logReq(req, res, next){
   console.log(`${req.method} -- ${req.url} -- ${new Date().toLocaleTimeString}`);

   if(req.body) console.table(req.body);

   next();
}

export function globalError(error, req, res, next){
   res.status(error.status || 500).json({error: `❌ Error: ${error.message}`});
}