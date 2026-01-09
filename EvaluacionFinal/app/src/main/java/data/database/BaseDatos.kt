package data.database

import androidx.room.Database
import androidx.room.RoomDatabase
import data.dao.DaoMedicion
import data.entity.Medicion

@Database(entities = [Medicion::class], version = 1)
abstract class BaseDatos: RoomDatabase() {
    abstract fun daoMedicion(): DaoMedicion

}

