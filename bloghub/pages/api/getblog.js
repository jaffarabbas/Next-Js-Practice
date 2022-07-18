//  http://localhost:3000/api/getblog?slug=how-to-learn-javascript
import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err, data) => { 
    if(err){
        res.status(500).json({error: 'No Blog Found'})
    }
    res.status(200).json( JSON.parse(data) )
  })
}
