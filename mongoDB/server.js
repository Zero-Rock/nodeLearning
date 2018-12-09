/**
 * Created by Mobius on 2018/3/28 22:49.
 */
const express = require( "express" );
const mongoose = require( "mongoose" );
const chalk = require( "chalk" );
const server = express();
//连接数据库
const db = mongoose.createConnection( "mongodb://127.0.0.1:27017/shop" );
//判断数据库是否连接成功
db.on( "error", function ( error ) {
  console.log( "数据库连接失败:" + error );
} );
const data = require( "../test/data" );
//数据模型
const Schema = mongoose.Schema;
const schema = Schema( {
  name: { type: String },
  description: { type: String },
  category: { type: String },
  price: { type: Number }
}, {
  collection: "product"
} );
//获取数据模型
const model = db.model( "product", schema );
model.find( {}, function ( error, result ) {
  if (error) {
    console.log( error );
    return;
  }
  //result是数组
  // console.log( result );
} );