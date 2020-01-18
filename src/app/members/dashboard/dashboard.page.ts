import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public esEsp: boolean;
  public esIngles: boolean;
  public esPortugues: boolean;
  public esNumeros: boolean;
  public esAnimales: boolean;
  public esColores: boolean;
  public srcIdioma: string;
  public srcCategoria: string;
  // public loading: boolean;

  /**
   * [constructor description]
   * @param authService [description]
   * @param nativeAudio [description]
   */
  constructor(
    private authService: AuthenticationService,
    private nativeAudio: NativeAudio
  ) {

    this.esEsp = true;
    this.esIngles = false;
    this.esPortugues = false;
    this.esNumeros = true;
    this.esAnimales = false;
    this.esColores = false;
    this.srcIdioma = 'assets/flags/spain.png';
    this.srcCategoria = 'assets/numeros.png';
  }

  // Inicio
  ngOnInit() {
    this.activarIdioma('esp');
  }

  /**
   * [activarIdioma description]
   * @param  idioma [description]
   * @return        [description]
   */
  activarIdioma(idioma) {
    // this.loading = true;
    switch (idioma) {
       case 'ingles': {
              this.desactivarIdioma();
              this.cambiarIdioma('ingles');
              this.esEsp = false;
              this.esIngles = true;
              this.esPortugues = false;
              this.srcIdioma = 'assets/flags/united-kingdom.png';
              break;
       }
       case 'portugues': {
              this.desactivarIdioma();
              this.cambiarIdioma('portugues');
              this.esEsp = false;
              this.esIngles = false;
              this.esPortugues = true;
              this.srcIdioma = 'assets/flags/brazil.png';
              break;
       }
       default: {
              this.desactivarIdioma();
              this.cambiarIdioma('esp');
              this.esEsp = true;
              this.esIngles = false;
              this.esPortugues = false;
              this.srcIdioma = 'assets/flags/spain.png';
              break;
       }
    }
    // this.loading = false;
  }

  /**
   * [activarCategoria description]
   * @param  categoria [description]
   * @return           [description]
   */
  activarCategoria(categoria) {
    // this.loading = true;
    switch (categoria) {
       case 'animales': {
          this.desactivarIdioma();
          this.cambiarCategoria('animales');
          this.esNumeros = false;
          this.esAnimales = true;
          this.esColores = false;
          this.srcCategoria = 'assets/cat.png';
          break;
       }

       case 'colores': {
         this.desactivarIdioma();
         this.cambiarCategoria('colores');
         this.esNumeros = false;
         this.esAnimales = false;
         this.esColores = true;
         this.srcCategoria = 'assets/rgb.png';
         break;
       }

       default: {
         this.desactivarIdioma();
         this.cambiarCategoria('numeros');
         this.esNumeros = true;
         this.esAnimales = false;
         this.esColores = false;
         this.srcCategoria = 'assets/numeros.png';
         break;
       }
    }
    // this.loading = false;
  }


  activarSonido(sonido) {
    this.nativeAudio.play(sonido);
  }

  logout() {
    this.desactivarIdioma();
    this.authService.logout();
  }

  /**
   * [cargarColoresPortugues description]
   * @return [description]
   */
  cargarColoresPortugues() {
    this.nativeAudio.preloadSimple('azul-pr', 'assets/sonidos/azul.pr.mp3');
    this.nativeAudio.preloadSimple('rojo-pr', 'assets/sonidos/rojo.pr.mp3');
    this.nativeAudio.preloadSimple('verde-pr', 'assets/sonidos/verde.pr.mp3');
    this.nativeAudio.preloadSimple('amarillo-pr', 'assets/sonidos/amarillo.pr.mp3');
    this.nativeAudio.preloadSimple('blanco-pr', 'assets/sonidos/blanco.pr.mp3');
  }

  /**
   * [borrarColoresPortugues description]
   * @return [description]
   */
  borrarColoresPortugues() {
    this.nativeAudio.unload('azul-pr');
    this.nativeAudio.unload('rojo-pr');
    this.nativeAudio.unload('verde-pr');
    this.nativeAudio.unload('amarillo-pr');
    this.nativeAudio.unload('blanco-pr');
  }

  /**
   * [cargarColoresIngles description]
   * @return [description]
   */
  cargarColoresIngles() {
    this.nativeAudio.preloadSimple('azul-en', 'assets/sonidos/azul.en.mp3');
    this.nativeAudio.preloadSimple('rojo-en', 'assets/sonidos/rojo.en.mp3');
    this.nativeAudio.preloadSimple('verde-en', 'assets/sonidos/verde.en.mp3');
    this.nativeAudio.preloadSimple('amarillo-en', 'assets/sonidos/amarillo.en.mp3');
    this.nativeAudio.preloadSimple('blanco-en', 'assets/sonidos/blanco.en.mp3');
  }

  /**
   * [borrarColoresIngles description]
   * @return [description]
   */
  borrarColoresIngles() {
    this.nativeAudio.unload('azul-en');
    this.nativeAudio.unload('rojo-en');
    this.nativeAudio.unload('verde-en');
    this.nativeAudio.unload('amarillo-en');
    this.nativeAudio.unload('blanco-en');
  }

  /**
   * [ol description]
   * @return [description]
   */
  cargarColoresEsp() {
    this.nativeAudio.preloadSimple('azul-es', 'assets/sonidos/azul.es.mp3');
    this.nativeAudio.preloadSimple('rojo-es', 'assets/sonidos/rojo.es.mp3');
    this.nativeAudio.preloadSimple('verde-es', 'assets/sonidos/verde.es.mp3');
    this.nativeAudio.preloadSimple('amarillo-es', 'assets/sonidos/amarillo.es.mp3');
    this.nativeAudio.preloadSimple('blanco-es', 'assets/sonidos/blanco.es.mp3');
  }

  /**
   * [ol description]
   * @return [description]
   */
  borrarColoresEsp() {
    this.nativeAudio.unload('azul-es');
    this.nativeAudio.unload('rojo-es');
    this.nativeAudio.unload('verde-es');
    this.nativeAudio.unload('amarillo-es');
    this.nativeAudio.unload('blanco-es');
  }

  /**
   * [cargarAnimalesPortugues description]
   * @return [description]
   */
  cargarAnimalesPortugues() {
    this.nativeAudio.preloadSimple('perro-pr', 'assets/sonidos/perro.pr.mp3');
    this.nativeAudio.preloadSimple('gato-pr', 'assets/sonidos/gato.pr.mp3');
    this.nativeAudio.preloadSimple('gallina-pr', 'assets/sonidos/gallina.pr.mp3');
    this.nativeAudio.preloadSimple('conejo-pr', 'assets/sonidos/conejo.pr.mp3');
    this.nativeAudio.preloadSimple('pato-pr', 'assets/sonidos/pato.pr.mp3');
  }

  /**
   * [borrarAnimalesPortugues description]
   * @return [description]
   */
  borrarAnimalesPortugues() {
    this.nativeAudio.unload('perro-pr');
    this.nativeAudio.unload('gato-pr');
    this.nativeAudio.unload('gallina-pr');
    this.nativeAudio.unload('conejo-pr');
    this.nativeAudio.unload('pato-pr');
  }

  /**
   * [cargarAnimalesIngles description]
   * @return [description]
   */
  cargarAnimalesIngles() {
    this.nativeAudio.preloadSimple('perro-en', 'assets/sonidos/perro.en.mp3');
    this.nativeAudio.preloadSimple('gato-en', 'assets/sonidos/gato.en.mp3');
    this.nativeAudio.preloadSimple('gallina-en', 'assets/sonidos/gallina.en.mp3');
    this.nativeAudio.preloadSimple('conejo-en', 'assets/sonidos/conejo.en.mp3');
    this.nativeAudio.preloadSimple('pato-en', 'assets/sonidos/pato.en.mp3');
  }

  /**
   * [borrarAnimalesIngles description]
   * @return [description]
   */
  borrarAnimalesIngles() {
    this.nativeAudio.unload('perro-en');
    this.nativeAudio.unload('gato-en');
    this.nativeAudio.unload('gallina-en');
    this.nativeAudio.unload('conejo-en');
    this.nativeAudio.unload('pato-en');
  }

  /**
   * [cargarAnimalesEsp description]
   * @return [description]
   */
  cargarAnimalesEsp() {
    this.nativeAudio.preloadSimple('perro-es', 'assets/sonidos/perro.es.mp3');
    this.nativeAudio.preloadSimple('gato-es', 'assets/sonidos/gato.es.mp3');
    this.nativeAudio.preloadSimple('gallina-es', 'assets/sonidos/gallina.es.mp3');
    this.nativeAudio.preloadSimple('conejo-es', 'assets/sonidos/conejo.es.mp3');
    this.nativeAudio.preloadSimple('pato-es', 'assets/sonidos/pato.es.mp3');
  }

  /**
   * [borrarAnimalesEsp description]
   * @return [description]
   */
  borrarAnimalesEsp() {
    this.nativeAudio.unload('perro-es');
    this.nativeAudio.unload('gato-es');
    this.nativeAudio.unload('gallina-es');
    this.nativeAudio.unload('conejo-es');
    this.nativeAudio.unload('pato-es');
  }
  /**
   * [cargarNumerosPortugues description]
   * @return [description]
   */
  cargarNumerosPortugues() {
    this.nativeAudio.preloadSimple('uno-pr', 'assets/sonidos/uno.pr.mp3');
    this.nativeAudio.preloadSimple('dos-pr', 'assets/sonidos/dos.pr.mp3');
    this.nativeAudio.preloadSimple('tres-pr', 'assets/sonidos/tres.pr.mp3');
    this.nativeAudio.preloadSimple('cuatro-pr', 'assets/sonidos/cuatro.pr.mp3');
    this.nativeAudio.preloadSimple('cinco-pr', 'assets/sonidos/cinco.pr.mp3');
  }

  /**
   * [borrarNumerosPortugues description]
   * @return [description]
   */
  borrarNumerosPortugues() {
    this.nativeAudio.unload('uno-pr');
    this.nativeAudio.unload('dos-pr');
    this.nativeAudio.unload('tres-pr');
    this.nativeAudio.unload('cuatro-pr');
    this.nativeAudio.unload('cinco-pr');
  }

  /**
   * [cargarNumerosIngles description]
   * @return [description]
   */
  cargarNumerosIngles() {
    this.nativeAudio.preloadSimple('uno-en', 'assets/sonidos/uno.en.mp3');
    this.nativeAudio.preloadSimple('dos-en', 'assets/sonidos/dos.en.mp3');
    this.nativeAudio.preloadSimple('tres-en', 'assets/sonidos/tres.en.mp3');
    this.nativeAudio.preloadSimple('cuatro-en', 'assets/sonidos/cuatro.en.mp3');
    this.nativeAudio.preloadSimple('cinco-en', 'assets/sonidos/cinco.en.mp3');
  }

  /**
   * [borrarNumerosIngles description]
   * @return [description]
   */
  borrarNumerosIngles() {
    this.nativeAudio.unload('uno-en');
    this.nativeAudio.unload('dos-en');
    this.nativeAudio.unload('tres-en');
    this.nativeAudio.unload('cuatro-en');
    this.nativeAudio.unload('cinco-en');
  }

  /**
   * [cargarNumerosEsp description]
   * @return [description]
   */
  cargarNumerosEsp() {
    this.nativeAudio.preloadSimple('uno-es', 'assets/sonidos/uno.es.mp3');
    this.nativeAudio.preloadSimple('dos-es', 'assets/sonidos/dos.es.mp3');
    this.nativeAudio.preloadSimple('tres-es', 'assets/sonidos/tres.es.mp3');
    this.nativeAudio.preloadSimple('cuatro-es', 'assets/sonidos/cuatro.es.mp3');
    this.nativeAudio.preloadSimple('cinco-es', 'assets/sonidos/cinco.es.mp3');
  }

  /**
   * [borrarNumerosEsp description]
   * @return [description]
   */
  borrarNumerosEsp() {
    this.nativeAudio.unload('uno-es');
    this.nativeAudio.unload('dos-es');
    this.nativeAudio.unload('tres-es');
    this.nativeAudio.unload('cuatro-es');
    this.nativeAudio.unload('cinco-es');
  }
  /**
   * [desactivarIdioma description]
   * @return [description]
   */
  desactivarIdioma() {
    let idioma: any;
    if (this.esEsp) {
      idioma = 'esp';
    } else if (this.esPortugues) {
      idioma = 'portugues'
    } else if (this.esIngles) {
      idioma = 'ingles';
    }

    switch (idioma) {
       case 'ingles': {
              if (this.esAnimales) {
                this.borrarAnimalesIngles();
              }
              if (this.esColores) {
                this.borrarColoresIngles();
              }
              if (this.esNumeros) {
                this.borrarNumerosIngles();
              }
              break;
       }
       case 'portugues': {
             if (this.esAnimales) {
               this.borrarAnimalesPortugues();
             }
             if (this.esColores) {
               this.borrarColoresPortugues();
             }
             if (this.esNumeros) {
               this.borrarNumerosPortugues();
             }
              break;
       }
       default: {
             if (this.esAnimales) {
               this.borrarAnimalesEsp();
             }
             if (this.esColores) {
               this.borrarColoresEsp();
             }
             if (this.esNumeros) {
               this.borrarNumerosEsp();
             }
              break;
       }
    }
  }

  /**
   * [cambiarIdioma description]
   * @param  idioma [description]
   * @return        [description]
   */
  cambiarIdioma(idioma) {
    switch (idioma) {
       case 'ingles': {
              if (this.esAnimales) {
                this.cargarAnimalesIngles();
              }
              if (this.esColores) {
                this.cargarColoresIngles();
              }
              if (this.esNumeros) {
                this.cargarNumerosIngles();
              }
              break;
       }
       case 'portugues': {
             if (this.esAnimales) {
               this.cargarAnimalesPortugues();
             }
             if (this.esColores) {
               this.cargarColoresPortugues();
             }
             if (this.esNumeros) {
               this.cargarNumerosPortugues();
             }
             break;
       }
       default: {
             if (this.esAnimales) {
               this.cargarAnimalesEsp();
             }
             if (this.esColores) {
               this.cargarColoresEsp();
             }
             if (this.esNumeros) {
               this.cargarNumerosEsp();
             }
             break;
       }
    }
  }

  /**
   * [cambiarCategoria description]
   * @param  categoria [description]
   * @return           [description]
   */
  cambiarCategoria(categoria) {
    switch (categoria) {
       case 'colores': {
               if (this.esPortugues) {
                 this.cargarColoresPortugues();
               }

               if (this.esIngles) {
                 this.cargarColoresIngles();
               }

               if (this.esEsp) {
                 this.cargarColoresEsp();
               }
               break;
       }
       case 'animales': {
               if (this.esPortugues) {
                 this.cargarAnimalesPortugues();
               }

               if ( this.esIngles ) {
                 this.cargarAnimalesIngles();
               }

               if (this.esEsp) {
                 this.cargarAnimalesEsp();
               }
               break;
       }
       default: {
               if (this.esPortugues) {
                 this.cargarNumerosPortugues();
               }

               if ( this.esIngles ) {
                 this.cargarNumerosIngles();
               }

               if (this.esEsp) {
                 this.cargarNumerosEsp();
               }
               break;
       }
    }
  }

}
