const request = require('request')
const uuidv4 = require("uuid/v4")
const crypto = require('crypto')
const sign = require('jsonwebtoken').sign
const queryEncode = require("querystring").encode

const access_key = "E8JJtxULxBoHr71cYA6aLvXxE2ODiNnNig7p5Po9"
const secret_key = "c9y0WFZDZY9pvooifQ4zvIdxAP6IxSdx8UnCbt6M"
const server_url = "https://api.upbit.com"
const body = {
    market: 'KRW-BTC'
}

const query = queryEncode(body)

const hash = crypto.createHash('sha512')
const queryHash = hash.update(query, 'utf-8').digest('hex')

const payload = {
    access_key: access_key,
    nonce: uuidv4(),
    query_hash: queryHash,
    query_hash_alg: 'SHA512',
}

const token = sign(payload, secret_key)

const options = {
    method: "GET",
    url: server_url + "/v1/orders/chance?" + query,
    headers: {Authorization: `Bearer ${token}`},
    json: body
}

request(options, (error, response, body) => {
    if (error) throw new Error(error)
    console.log(body)
})