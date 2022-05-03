import { db } from "./Sqlite";

export function CreateTableSchools () {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Schools " +
            "(id INTEGER PRIMARY KEY, nome TEXT);")
    })
}

export async function addSchool (school) {

    return new Promise( (resolve) =>{

        db.transaction((transaction) => {
             transaction.executeSql("INSERT INTO Schools (id, nome) VALUES (?, ?);", 
            [ school.id, school.nome], () => {
                resolve("Estudante salvo com sucesso!")
            });
        })

    }) 

}

export async function getSchools () {

    return new Promise( (resolve) =>{
        db.transaction((transaction) => {
             transaction.executeSql("SELECT * FROM Schools;", [], (transaction, result) => {
                resolve(result.rows._array)
            });
        })
    }) 

}