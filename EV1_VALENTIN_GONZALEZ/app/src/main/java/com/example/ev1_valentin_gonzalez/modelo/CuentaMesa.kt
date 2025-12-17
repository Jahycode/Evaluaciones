package com.example.ev1_valentin_gonzalez.modelo

class CuentaMesa(val mesa: Int) {

    private val items: MutableList<ItemMesa> = mutableListOf()
    var aceptaPropina: Boolean = true

    fun agregarItem(itemMenu: ItemMenu, cantidad: Int) {
        items.add(ItemMesa(itemMenu, cantidad))
    }

    fun agregarItem(itemMesa: ItemMesa) {
        items.add(itemMesa)
    }

    fun calcularTotalSinPropina(): Int {
        var total = 0
        for (item in items) {
            total += item.calcularSubtotal()
        }
        return total
    }

    fun calcularPropina(): Int {
        return if (aceptaPropina) {
            calcularTotalSinPropina() * 10 / 100
        } else {
            0
        }
    }

    fun calcularTotalConPropina(): Int {
        return calcularTotalSinPropina() + calcularPropina()
    }
}