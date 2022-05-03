import { db } from "./Sqlite";

export function CreateTable () {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Studentfinal " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, escolaID TEXT, grau TEXT, serie TEXT, etapa TEXT, genero TEXT, idade TEXT, r1 TEXT, r2 TEXT, carie TEXT, gengiva TEXT, dentetorto TEXT, limparboca, TEXT, saudebucal TEXT, r4 TEXT, r5 TEXT, r6 TEXT);")
    })
}

export async function addStudent (student) {

    return new Promise( (resolve) =>{

        db.transaction((transaction) => {
             transaction.executeSql("INSERT INTO Studentfinal (escolaID, grau, serie, etapa, genero, idade, r1, r2, carie, gengiva, dentetorto, limparboca, saudebucal, r4, r5, r6) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", 
            [ student.escolaID, 
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
              student.r6
            ], () => {
                resolve("Estudante salvo com sucesso!")
            });
        })

    }) 

}

export async function getStudent () {

    return new Promise( (resolve) =>{
        db.transaction((transaction) => {
             transaction.executeSql("SELECT * FROM Studentfinal;", [], (transaction, result) => {
                resolve(result.rows._array)
            });
        })
    }) 

}