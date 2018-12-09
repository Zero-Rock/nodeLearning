/**
 * Created by Mobius on 2018/3/29 0:01.
 */
//导入mongoose模块,用于操作mongodb数据库
//安装命令: cnpm install mongoose
const mongoose = require( "mongoose" );

//链接数据库
const db = mongoose.connect( "mongodb://127.0.0.1:27017/jarvis" );

//监听数据库是否打开
db.connection.on( "open", function () {
  console.log( "数据库连接成功" );
  //增删改查:mongoose对数据进行操作,基于数据模型操作
  //要设置数据模型的结构(用于规范操作数据的结构)
  const schema = new mongoose.Schema( {
    name: { type: String },
    gender: { type: String },
    age: { type: Number }
  }, {
    collection: "student"
  } );
  const model = db.model( "student", schema );
  //查询所有
  model.find( {}, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    //result是数组
    console.log( result );
  } );
  //查询一条
  model.findOne( { name: "mobius" }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    //result是对象
    console.log( result );
  } );
  model.findById( "57fc4c084c297efdab186112", function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    //result是对象
    console.log( result );
  } );
  //条件查询
  //大于
  model.find( { age: { $gt: 20 } }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "**************************************" );
    console.log( result );
  } );
  //小于
  model.find( { age: { $lt: 20 } }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "**************************************" );
    console.log( result );
  } );
  //不等于
  model.find( { age: { $ne: 23 } }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "**************************************" );
    console.log( result );
  } );
  //大于等于
  model.find( { age: { $gte: 20 } }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "**************************************" );
    console.log( result );
  } );
  //小于等于
  model.find( { age: { $lte: 20 } }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************小于等于********************" );
    console.log( result );
  } );
  //多条件
  model.find( { $or: [ { name: "石兰" }, { gender: "男" } ] }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************多条件********************" );
    console.log( result );
  } );
  //判断是否包含某个字段
  model.find( { m: { $exists: true } }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************判断是否包含某个字段********************" );
    console.log( result );
  } );
  //限制查询数量
  model.find( {}, null, { limit: 3 }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************限制查询数量(获取前三条)********************" );
    console.log( result );
  } );
  //跳过某几条
  model.find( {}, null, { skip: 7 }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************跳过前七条********************" );
    console.log( result );
  } );
  //排序
  model.find( {}, null, { sort: { age: 1 } }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************按照年龄升序********************" );
    console.log( result );
  } );
  model.find( {}, null, { sort: { age: - 1 } }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************按照年龄降序********************" );
    console.log( result );
  } );
  //更新
  model.update( { name: "小红" }, { $set: { name: "晓梦" } }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************更新一条********************" );
    console.log( result );
  } );
  model.update( { name: "晓梦" }, { $set: { age: 20 } }, { multi: true }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************更新多条********************" );
    console.log( result );
  } );
  //删除
  model.remove( { name: "卫庄" }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************删除********************" );
    console.log( result );
  } );
  model.findOneAndRemove( { name: "卫庄" }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************删除一条********************" );
    console.log( result );
  } );
  //插入数据
  model.create( {
    name: "胜七",
    gender: "男",
    age: 33
  }, function ( error, result ) {
    if (error) {
      console.log( error );
      return;
    }
    console.log( "******************插入数据********************" );
    console.log( result );
  } );
  //实体有模型生成
  const entity = new model( {
    name: "田猛",
    gender: "男",
    age: 32
  } );
  entity.save( function ( error, result ) {
    console.log( result );
  } );
} );

//监听数据库是否连接错误
db.connection.on( "error", function ( error ) {
  console.log( "数据库连接失败:" + error );
} );
