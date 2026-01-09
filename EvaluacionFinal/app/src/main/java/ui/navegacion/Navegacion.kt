package ui.navegacion

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import ui.pantallas.PantallaFormularioMedicion
import ui.pantallas.PantallaListadoMediciones
import viewmodel.MedicionViewModel



@Composable
fun NavegacionPrincipal(
    navController: NavHostController,
    viewModel: MedicionViewModel
) {
    NavHost(
        navController = navController,
        startDestination = "listado"
    ){
        composable("listado"){
            PantallaListadoMediciones(
                viewModel = viewModel,
                onAgregar = {
                    navController.navigate("formulario")
                }
            )
        }
        composable("formulario"){
            PantallaFormularioMedicion(
                viewModel = viewModel,
                onGuardado = {
                    navController.navigate("listado")
                },
                onCancelar = {
                    navController.navigate("listado")
                }
            )
        }

    }

}

