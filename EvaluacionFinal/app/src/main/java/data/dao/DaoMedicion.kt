package data.dao

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import data.entity.Medicion

@Dao
interface DaoMedicion {

    @Query("SELECT * FROM mediciones ORDER BY fecha DESC")
    suspend fun obtenerTodos(): List<Medicion>

    @Insert
    suspend fun insertar(medicion: Medicion)
}


