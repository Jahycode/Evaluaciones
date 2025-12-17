package com.example.ev1_valentin_gonzalez.modelo

class ItemMesa(val ItemMenu: ItemMenu,val cantidad:Int) {

    fun calcularSubtotal(): Int{
        return ItemMenu.precio * cantidad
    }
}