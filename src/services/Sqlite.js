import * as SQLite from 'expo-sqlite'

function init(){
   const database = SQLite.openDatabase("db.db")
   return database
}

export const db = init();