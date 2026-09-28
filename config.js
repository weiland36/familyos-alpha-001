export default function handler(req,res){res.setHeader('Cache-Control','no-store');res.status(200).json({url:process.env.FAMILYOS_CONFIG_URL,client:process.env.FAMILYOS_CONFIG_VALUE});}
