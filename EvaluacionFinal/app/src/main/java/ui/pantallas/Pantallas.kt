package ui.pantallas

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.selection.selectable
import androidx.compose.foundation.selection.selectableGroup
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Lightbulb
import androidx.compose.material.icons.filled.LocalFireDepartment
import androidx.compose.material.icons.filled.WaterDrop
import androidx.compose.material3.Button
import androidx.compose.material3.Divider
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.RadioButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import com.example.valentin_gonzalez_evf.R
import data.entity.Medicion
import viewmodel.MedicionViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PantallaListadoMediciones(
    viewModel: MedicionViewModel,
    onAgregar: () -> Unit
) {
    val mediciones = viewModel.mediciones

    LaunchedEffect(Unit) {
        viewModel.obtenerMediciones()
    }
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(text = stringResource(R.string.titulo_listado)) }
            ) },
        bottomBar = {
            Button(
                onClick = onAgregar,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp)
            ) {
                Text(text = stringResource(R.string.agregar_medicion))
            } })
    { paddingValues ->
        if (mediciones.isEmpty()) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues),
                contentAlignment = Alignment.Center
            ) {
                Text(text = stringResource(R.string.sin_mediciones))
            } }
        else {
            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues)
            ) {
                items(mediciones) { medicion ->
                    ItemMedicion(medicion)
                    Divider() }
            } }
    }
}
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PantallaFormularioMedicion(
    viewModel: MedicionViewModel,
    onGuardado: () -> Unit,
    onCancelar: () -> Unit
) {
    var categoria by remember { mutableStateOf("") }
    var lectura by remember { mutableStateOf("") }
    var fecha by remember { mutableStateOf("") }

    val lecturaDouble = lectura.toDoubleOrNull()
    val lecturaError = lectura.isNotEmpty() && lecturaDouble == null

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(text = stringResource(R.string.nueva_medicion)) },
                navigationIcon = {
                    IconButton(onClick = onCancelar) {
                        Icon(
                            imageVector = Icons.Default.ArrowBack,
                            contentDescription = stringResource(R.string.volver)
                        )
                    }
                }
            )
        }
    ) { paddingValues ->

        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {

            OpcionesCategoriasUI(
                categoriaSeleccionada = categoria,
                onCategoriaSeleccionada = { categoria = it }
            )

            OutlinedTextField(
                value = lectura,
                onValueChange = { input ->
                    if (input.all { it.isDigit() || it == '.' }) {
                        lectura = input
                    }
                },
                label = { Text(stringResource(R.string.lectura)) },
                isError = lecturaError,
                keyboardOptions = KeyboardOptions(
                    keyboardType = KeyboardType.Number
                ),
                modifier = Modifier.fillMaxWidth()
            )

            if (lecturaError) {
                Text(
                    text = stringResource(R.string.solo_numeros),
                    color = MaterialTheme.colorScheme.error,
                    style = MaterialTheme.typography.bodySmall
                )
            }

            OutlinedTextField(
                value = fecha,
                onValueChange = { input ->
                    if (input.all { it.isDigit() || it == '-' }) {
                        fecha = input
                    }
                },
                label = { Text(stringResource(R.string.fecha)) },
                modifier = Modifier.fillMaxWidth()
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Guardar
            Button(
                onClick = {
                    if (
                        categoria.isNotBlank() &&
                        lecturaDouble != null &&
                        fecha.isNotBlank()
                    ) {
                        viewModel.insertarMedicion(
                            Medicion(
                                categoria = categoria,
                                lectura = lecturaDouble,
                                fecha = fecha
                            )
                        )
                        onGuardado()
                    }
                },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(stringResource(R.string.guardar))

            }
        }
    }
}


//SELECTOR (PANTALLA FORMULARIO)
@Composable
fun OpcionesCategoriasUI(
    categoriaSeleccionada: String,
    onCategoriaSeleccionada: (String) -> Unit
) {

    val categorias = listOf(
        stringResource(R.string.agua),
        stringResource(R.string.luz),
        stringResource(R.string.gas)
    )

    Column(Modifier.selectableGroup()) {
        categorias.forEach { categoria ->
            Row(
                Modifier
                    .fillMaxWidth()
                    .height(56.dp)
                    .selectable(
                        selected = (categoria == categoriaSeleccionada),
                        onClick = { onCategoriaSeleccionada(categoria) },
                        role = Role.RadioButton
                    )
                    .padding(horizontal = 16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                RadioButton(
                    selected = (categoria == categoriaSeleccionada),
                    onClick = null
                )
                Text(
                    text = categoria,
                    modifier = Modifier.padding(start = 16.dp)
                )
            }
        }
    }
}


//ICONOS (PANTALLA LISTADO)
@Composable
fun ItemMedicion(medicion: Medicion) {

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 12.dp, horizontal = 16.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {

        Icon(
            imageVector = when (medicion.categoria) {
                "Agua", "Water" -> Icons.Default.WaterDrop
                "Luz","Electricity" -> Icons.Default.Lightbulb
                "Gas" -> Icons.Default.LocalFireDepartment
                else -> Icons.Default.Info
            },
            contentDescription = null,
            modifier = Modifier.size(24.dp)
        )

        Text(
            text = medicion.categoria,
            style = MaterialTheme.typography.bodyLarge
        )

        Text(
            text = medicion.fecha,
            style = MaterialTheme.typography.bodySmall
        )

        Text(
            text = medicion.lectura.toString(),
            style = MaterialTheme.typography.bodyLarge
        )
    }
}
