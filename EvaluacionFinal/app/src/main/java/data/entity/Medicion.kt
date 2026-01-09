package data.entity

import androidx.room.Entity
import androidx.room.PrimaryKey
@Entity(tableName = "mediciones")
data class Medicion (
    @PrimaryKey(autoGenerate = true)
    var id: Int = 0,
    var categoria: String,
    var lectura: Double,
    var fecha: String
)