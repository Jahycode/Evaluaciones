package com.example.ev1_valentin_gonzalez

import android.os.Bundle
import android.widget.EditText
import android.widget.Switch
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.widget.addTextChangedListener
import com.example.ev1_valentin_gonzalez.modelo.CuentaMesa
import com.example.ev1_valentin_gonzalez.modelo.ItemMenu
import java.text.NumberFormat
import java.util.Locale

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        // === Menu ===
        val pastelDeChoclo = ItemMenu(nombre = "Pastel de Choclo", precio = 12000)
        val cazuela = ItemMenu(nombre = "Cazuela", precio = 10000)

        // === Views XML ===
        val etCantPastel = findViewById<EditText>(R.id.etcantPastel)
        val etCantCazuela = findViewById<EditText>(R.id.etcantCazuela)

        val tvPrecioPastel = findViewById<TextView>(R.id.tvprecioPastel)
        val tvPrecioCazuela = findViewById<TextView>(R.id.tvprecioCazuela)

        val tvTotalComida = findViewById<TextView>(R.id.tvTotalComida)
        val tvTotalPropina = findViewById<TextView>(R.id.tvTotalPropina)
        val tvTotalFinal = findViewById<TextView>(R.id.tvTotalFinal)

        val swPropina = findViewById<Switch>(R.id.swPropina)

        // === Formato pesos chilenos ===
        val clp: NumberFormat = NumberFormat.getCurrencyInstance(Locale("es", "CL"))

        fun leerCantidad(et: EditText): Int {
            // vacío -> 0 (evita crash)
            return et.text.toString().trim().toIntOrNull() ?: 0
        }

        fun actualizarTotales() {
            val cantPastel = leerCantidad(etCantPastel)
            val cantCazuela = leerCantidad(etCantCazuela)

            // == Subtotales por plato ==
            val subPastel = cantPastel * pastelDeChoclo.precio
            val subCazuela = cantCazuela * cazuela.precio

            tvPrecioPastel.text = clp.format(subPastel)
            tvPrecioCazuela.text = clp.format(subCazuela)

            // == Logica ==
            val cuenta = CuentaMesa(mesa = 1)
            cuenta.aceptaPropina = swPropina.isChecked

            if (cantPastel > 0) cuenta.agregarItem(pastelDeChoclo, cantPastel)
            if (cantCazuela > 0) cuenta.agregarItem(cazuela, cantCazuela)

            val totalSinPropina = cuenta.calcularTotalSinPropina()
            val propina = cuenta.calcularPropina()
            val totalConPropina = cuenta.calcularTotalConPropina()

            tvTotalComida.text = clp.format(totalSinPropina)
            tvTotalPropina.text = clp.format(propina)
            tvTotalFinal.text = clp.format(totalConPropina)
        }

        // === Actualizar inmediatamente ===
        etCantPastel.addTextChangedListener { actualizarTotales() }
        etCantCazuela.addTextChangedListener { actualizarTotales() }
        swPropina.setOnCheckedChangeListener { _, _ -> actualizarTotales() }

        actualizarTotales()

    }
}