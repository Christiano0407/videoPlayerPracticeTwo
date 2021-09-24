console.group("Polimorfismo");
// >>> Es la  HERENCIA 2.0 <<<
// Parámetros >
// El polimorfismo es uno de los principios de la programación orientada a objetos (OOP). Es la práctica de diseñar objetos para compartir comportamientos y poder anular los comportamientos compartidos con otros específicos. El polimorfismo se aprovecha de la herencia para que esto suceda.
// <<<< Tipos de Po: 1-SOBRECARGA / 2: PARAMÉTRICO / 3: INCLUSIÓN >>>>
// << ================================= ================================================================= ====== >>
// (H) Polimorfismo <==>
// Instancia Comentario = Crear un comentario >

export class Comment {
  cosntructor({
    // Propiedades ( props)>>
    content,
    studentName,
    studentRole = "estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
  // < Methods >
  // Método Publicar >>
  publicar() {
    console.log(this.studentName + " (" + this.studentRole + ")");
    console.log(this.likes + "likes");
    console.log(this.content);
  }
}

console.groupEnd();
