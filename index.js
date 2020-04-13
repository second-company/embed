exports.success = (msg) => {
if(!msg) throw '[ERR] You need to have a valid message on the function "embed".'
    let embed = {
     description: `✅ ${msg}`,
     color: '#2fa811'
   }
   return embed;
}
exports.warn = (msg) => {
if(!msg) throw '[ERR] You need to have a valid message on the function "embed".'
    let embed = {
     description: `⚠️ ${msg}`,
     color: '#fced1c'
    }
    return embed;
}
exports.info = (msg) => {
if(!msg) throw '[ERR] You need to have a valid message on the function "embed".'
    let embed = {
    description: `ℹ️ ${msg}`,
    color: '#3c8de7'
    }
    return embed;
}
exports.error = (msg) => {
    if(!msg) {this.msg = 'Unknown. Please contact the bot author.'};
    let embed = {
      description: `❌ ${msg}`,
      color: '#ff0000'
    }
    return embed;
}
