/**
 * Created by 枯荣<panjiankang@cai-inc.com> on 2018-12-09 22:53.
 */
const logger = require( "../lib/logger" );
const mongoose = require( "mongoose" );
const schema = new mongoose.Schema( {
  title: { type: String },
  soure: { type: String },
  thumb: { type: String },
  author: {type: String},
  updateAt: {type: Date},
  createAt: {type: Date}
}, {
  collection: "book"
} );

mongoose.connect( "mongodb://localhost:27017/mobius_self", ( err ) => {
  if (err) {
    logger.error( "connect failed" );
  } else {
    logger.done( "connect success" );
  }
} );

const bookModel = mongoose.model( "book", schema );
// bookModel.findOne( { title: "你不知道的 JavaScript(下)" } ).exec((err,result)=>{
//   console.log(result)
// });

bookModel.find( { title: /JavaScript/ } ).where( "title" ).in( [ "你不知道的 JavaScript(上)", "你不知道的 JavaScript(中)", "你不知道的 JavaScript(下)" ] ).select( "author, updateAt, createAt" ).limit( 200 ).sort( { author: -1 } ).exec( ( err, result ) => {
  console.log( result );
} );
