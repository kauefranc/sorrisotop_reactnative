import { db } from "./Sqlite";

export function CreateTable () {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Studentfinal2 " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, escolaID TEXT, grau TEXT, serie TEXT, etapa TEXT, genero TEXT, idade TEXT, r1 TEXT, r2 TEXT, carie TEXT, gengiva TEXT, dentetorto TEXT, limparboca, TEXT, saudebucal TEXT, r4 TEXT, r5 TEXT, r6 TEXT, enviado TEXT);")
    })
}

export async function addStudent (student) {

    return new Promise( (resolve) =>{

        db.transaction((transaction) => {
             transaction.executeSql("INSERT INTO Studentfinal2 (escolaID, grau, serie, etapa, genero, idade, r1, r2, carie, gengiva, dentetorto, limparboca, saudebucal, r4, r5, r6, enviado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", 
            [ 
              student.escolaID, 
              student.grau, 
              student.serie, 
              student.etapa,

              student.genero, 
              student.idade, 

              student.r1, 
              student.r2, 

              student.carie,
              student.gengiva,
              student.dentetorto,
              student.limparboca,
              student.saudebucal,

              student.r4, 
              student.r5, 
              student.r6,
              student.enviado
            ], () => {
                resolve("Estudante salvo com sucesso!")
            });
        })

    }) 

}

export async function getStudent () {

    return new Promise( (resolve) =>{
        db.transaction((transaction) => {
             transaction.executeSql("SELECT * FROM Studentfinal2 WHERE enviado = '0.0';", [], (transaction, result) => {
                resolve(result.rows._array)
            });
        })
    }) 

}

export async function updateStudent (id) {

    return new Promise( (resolve) =>{
        db.transaction((transaction) => {
             transaction.executeSql("UPDATE Studentfinal2 SET enviado = '1.0' WHERE id = ?", [id], (transaction, result) => {
                resolve(result.rows._array)
            });
        })
    }) 

}

export async function deleteStudent () {

    return new Promise( (resolve) =>{
        db.transaction((transaction) => {
             transaction.executeSql("DELETE FROM Studentfinal2;", [], (transaction, result) => {
                resolve("Respostas removidas com sucesso!")
            });
        })
    }) 

}