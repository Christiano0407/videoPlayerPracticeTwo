console.group("HERENCIA Javascript");
// >> extends ====>
// >> extends ====> Herencias ==>

// << ============================================================================= >>
// (G)

/* import { Student } from "../oPPBasic/oppECMA6Seven.js"; */

// Nuevas Instancias de OBJETO >>>>> No sólo va existir Student (madre)>>>>>>>>
export class FreeStudent extends Student {
  constructor(props) {
    // Validar
    super(props); // Referenciar al constructor de nuestra "Madre >> Student" ==>
  }
  // methods ==>
  approved(newCourse) {
    // Validar >>
    // propiedad => isFree>

    if (newCourse.isFree) {
      this.approvedCourse.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos mucho, " +
          this.name +
          ", no puedes acceder a éste curso. Sólo es para planes Expert y Plus"
      );
    }
  }
}

export class BasicStudent extends Student {
  constructor(props) {
    super(props);
    // props => parámetros >
  }
  // Methods => Nuevo método >
  approved(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourse.push(newCourse);
    } else {
      console.warn("Lo siento" + this.name + " Sólo es para Plus");
    }
  }
}

export class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  // Methods =>
  approved(newCourse) {
    this.approvedCourse.push(newCourse);
  }
}

console.groupEnd();
