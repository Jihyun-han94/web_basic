import request from 'request'

const my_coin = "BTC"

request( {
    method : 'GET',
    uri : 'https://api.bithumb.com/public/ticker/'+my_coin
}, (err, res, result) =>{     //callback
    if (err) {
        console.log(err);
        return;
    }
    const coin_info = JSON.parse(result)
    console.log(coin_info["data"])

})