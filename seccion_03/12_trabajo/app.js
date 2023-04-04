"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var FuerzaHeroe;
    (function (FuerzaHeroe) {
        FuerzaHeroe[FuerzaHeroe["acuaman"] = 0] = "acuaman";
        FuerzaHeroe[FuerzaHeroe["batman"] = 1] = "batman";
        FuerzaHeroe[FuerzaHeroe["flash"] = 5] = "flash";
        FuerzaHeroe[FuerzaHeroe["superman"] = 100] = "superman";
    })(FuerzaHeroe || (FuerzaHeroe = {}));
    var fuerzaFlash = FuerzaHeroe.flash;
    var fuerzaSuperman = FuerzaHeroe.superman;
    var fuerzaBatman = FuerzaHeroe.batman;
    var fuerzaAcuaman = FuerzaHeroe.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
