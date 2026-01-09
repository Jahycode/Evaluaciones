package viewmodel

import android.app.Application
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.example.valentin_gonzalez_evf.Aplicacion
import data.entity.Medicion
import kotlinx.coroutines.launch

class MedicionViewModel(application: Application) : AndroidViewModel(application) {

    private val dao = (application as Aplicacion).daoMedicion

    var mediciones by mutableStateOf(listOf<Medicion>())

    fun obtenerMediciones() {
        viewModelScope.launch {
            mediciones = dao.obtenerTodos()
        }
    }

    fun insertarMedicion(medicion: Medicion) {
        viewModelScope.launch {
            dao.insertar(medicion)
            obtenerMediciones()
        }
    }

}
