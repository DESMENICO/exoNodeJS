const sqlite3 = require("sqlite3").verbose();




let sql = "";
let db = new sqlite3.Database('albums.db',sqlite3.OPEN_READONLY, (err) =>{
    if(err){
        return console.error(err.message);
    }
    console.log("connected to the database!!")});

    /*
db.all(sql, [], (err,rows) => {
    if(err){
        throw err;
    }
    rows.forEach((row) => {
        console.log(row.Title);
    });
})*/

db.serialize(()=>{

    console.log("affiche les titre d'ablum trié\n\n")
    db.each("select Title from albums ORDER by Title",(err,row) => {
        if (err) {
            throw err
        }
        console.log(row.Title)

    })

    console.log("affiche les titre d'ablum trié\n\n")
    db.each("select LastName,FirstName from customers ORDER by LastName", (err,row) =>{
        if(err){
            throw err;
        }
        console.log(row.LastName + " - " + row.FirstName);
    })
    db.each("SELECT COUNT(CustomerId),Country from customers GROUP BY Country ORDER By Count(CustomerID) DESC", (err,row) =>{
        if(err){
            throw err;
        }
        console.log(row.count("CustomerId") + " - " + row.Country);
    })
})






/*

let sql2 = "select LastName,FirstName from customers ORDER by LastName";

console.log("\n")
console.log("Liste des étudiants trié par nom");
console.log("\n")
db.all(sql2, [], (err,rows) => {
    if(err){
        throw err;
    }
    rows.forEach((row) => {
        console.log(row.LastName + " - " + row.FirstName);
    });

})


let sql3 = "SELECT count(CustomerId),Country from customers GROUP BY Country ORDER By Count(CustomerID) DESC";

console.log("\n")
console.log("Nombre de client par pays");
console.log("\n")
db.all(sql3, [], (err,rows) => {
    if(err){
        throw err;
    }
    rows.forEach((row) => {
        console.log(row.count(CustomerId) + " - " + row.Country);
    });

})



closeDb();

function openDb(){
    let db =
    return db;
}


function closeDb(){
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });

}*/