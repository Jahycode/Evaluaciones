package com.example.valentin_gonzalez_evf

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.lifecycle.ViewModelProvider
import androidx.navigation.compose.rememberNavController
import com.example.valentin_gonzalez_evf.ui.theme.VALENTIN_GONZALEZ_EVFTheme
import ui.navegacion.NavegacionPrincipal
import viewmodel.MedicionViewModel

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        val viewModel = ViewModelProvider(
            this,
            ViewModelProvider.AndroidViewModelFactory.getInstance(application)
        )[MedicionViewModel::class.java]

        setContent {
            val navController = rememberNavController()

            NavegacionPrincipal(
                navController = navController,
                viewModel = viewModel
            )
        }
    }
}