package com.example.valentin_gonzalez_evf

import android.app.Application
import androidx.room.Room
import data.database.BaseDatos

class Aplicacion: Application() {

    val db by lazy{
        Room.databaseBuilder(
            this,
            BaseDatos::class.java,
            "mediciones.db").build()
    }

    val daoMedicion by lazy {
        db.daoMedicion()
    }
}