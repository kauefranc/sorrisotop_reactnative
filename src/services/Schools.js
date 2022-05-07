import { db } from "./Sqlite";

export function CreateTableSchools () {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Schools_teste " +
            "(id INTEGER PRIMARY KEY, nome TEXT);")
    })
}

export async function addSchool (school) {

    console.log(school);


    return new Promise( (resolve) =>{

        db.transaction((transaction) => {
             transaction.executeSql("INSERT INTO Schools_teste (id, nome) VALUES (?, ?);", 
            [ school.id, school.nomeunidade], () => {
                resolve("Estudante salvo com sucesso!")
            });
        })

    }) 

}

export async function getSchools () {

    return new Promise( (resolve) =>{
        db.transaction((transaction) => {
             transaction.executeSql("SELECT * FROM Schools_teste;", [], (transaction, result) => {
                resolve(result.rows._array)
            });
        })
    }) 

}

export async function deleteSchools () {

    return new Promise( (resolve) =>{
        db.transaction((transaction) => {
             transaction.executeSql("DELETE FROM Schools_teste;", [], (transaction, result) => {
                resolve("Escolas removidas com sucesso!")
            });
        })
    }) 

}