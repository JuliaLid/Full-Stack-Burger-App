var connection = require("../config/connection.js");

var orm  = {
    selectAll: function(tableInput,cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb){
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (?)";

        console.log(queryString);

        connection.query(queryString,val,function(err,result){
            if (err){
                throw err;
            }
         
            cb(result);
            
        });
    },
    updateOne: function(table,objColVals,condition,cb){
        var queryString = "UPDATE burgers_db. " + table;
        queryString += " SET ";
        queryString += "devoured = true ";
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err,result){
            if (err) {
                throw err;
            }
            console.log("mySQL rows changed " +result.changedRows);
            cb(result);
        });
    }
};

module.exports = orm;