const fs = require('fs');

module.exports.run = async function(body) {
    try {
        var post = JSON.parse(body);
        try {
              if (fs.existsSync("./Website/API/Stats/"+post[0].ID+".json")) {
                fs.writeFileSync("./Website/API/Stats/"+post[0].ID+".json",JSON.stringify(post))
              }else{
                fs.writeFile("./Website/API/Stats/"+post[0].ID+".json", JSON.stringify(post), function(err, data) {
                  if (err) console.log(err);
                });
              }
            }catch(err) {
              console.log(err)
        }
      }catch (err){
        res.end();
        return;
      }
}