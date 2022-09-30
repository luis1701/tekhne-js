// Agregar los siguientes metodos a la clase estudiante:
// getResumenPersona() => debe devolver un objeto con la informacion personal del estudiante
// Ej:
// {
//     name: 'Luis',
//     age: '31',
//     gender: 'Masculino'
// }
// getResumenEstudiante() => debe devolver un objeto con la informacion personal del estudiante
// Ej:
// {
//     curso: '6 sec',
//     colegio: 'Aleman Santa Maria',
// }
// isAdult() => retorna un booleano, true si es el estudiante mayor de edad y false caso contrario
// cantidadMaterias() => retorna la cantidad de materias
// cantidadMateriasPrincipales() => retorna la cantidad de materias principales
// buscarMateria(materia) => retorna un string que es la materia que esta buscando,
// si no se encuentra la materia debe retornar 'vacio'

class Persona {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getGender() {
        return this.gender
    }
}

class Estudiante extends Persona {
    mainSubjects = ["matematicas", "fisica", "quimica"]
    course = ''
    school = ''
    subjects = ['']
    getCourse() {
        return this.course
    }
    getSchool() {
        return this.school
    }
    getSubjects() {
        return this.subjects
    }
    getResumenPersona() {
        const objeto = {
            nombre: this.name,
            edad: this.age,
            genero: this.gender
        }
        return objeto;
    }
    // getResumenEstudiante() => debe devolver un objeto con la informacion personal del estudiante
    // Ej:
    // {
    //     curso: '6 sec',
    //     colegio: 'Aleman Santa Maria',
    // }
    getResumenEstudiante() {
        const objeto = {
            curso: this.course,
            colegio: this.course
        }
        return objeto;
    }
    // isAdult() => retorna un booleano, true si es el estudiante mayor de edad y false caso contrario
    isAdult() {
        if (this.age > 18) {
            return true;
        }
        return false;
    }
    // cantidadMaterias() => retorna la cantidad de materias
    cantidadMaterias() {
        return this.subjects.length;
    }
    // cantidadMateriasPrincipales() => retorna la cantidad de materias principales
    cantidadMateriasPrincipales() {
        return this.filterMainSubjects().length;
    }
    // buscarMateria(materia) => retorna un string que es la materia que esta buscando,
// si no se encuentra la materia debe retornar 'vacio'
    buscarMateria(materia)
    {
        let arreglo = this.subjects;
        return arreglo.find((elemento) => elemento === materia ) || 'vacio';
    }
    setCourse(course) {
        this.course = course
    }
    setSchool(school) {
        this.school = school
    }
    setSubjects(subjects) {
        this.subjects = subjects
    }
    filterMainSubjects() {
        return this.mainSubjects.filter((mainSubject) => this.subjects.includes(mainSubject))
    }
}

// [2, 4, 6, 8].includes(2) => true
// [2, 4, 6, 8].includes(3) => false

// ["matematicas", "ingles", "quimica", "artes", "musica"].includes("matematicas") => primera iteracion la resp. es true
// ["matematicas", "ingles", "quimica", "artes", "musica"].includes("fisica") => segunda iteracion la resp. es false
// ["matematicas", "ingles", "quimica", "artes", "musica"].includes("quimica") => tercera iteracion la resp. es true

const estudianteNuevo = new Estudiante('luis', 31, 'masculino')

// Veo datos personales
console.log('nombre: ', estudianteNuevo.getName(), ' edad: ', estudianteNuevo.getAge(), ' genero: ', estudianteNuevo.getGender())

// Modifico la informacion
estudianteNuevo.setCourse('sexto de sec.')
estudianteNuevo.setSchool('Aleman Santa Maria')
estudianteNuevo.setSubjects(["matematicas", "ingles", "quimica", "artes", "musica"])

// Veo datos del estudiante
console.log('curso: ', estudianteNuevo.getCourse(), ' colegio: ', estudianteNuevo.getSchool(), ' materias: ', estudianteNuevo.getSubjects())

// Filtro en que materias principales esta el estudiante
console.log('materias principales: ', estudianteNuevo.filterMainSubjects())

// getResumenPersona()
console.log('datos del objeto');
console.log(estudianteNuevo.getResumenPersona());

// getResumenEstudiante()
console.log('datos del objeto: ');
console.log(estudianteNuevo.getResumenEstudiante());

// isAdult() => retorna un booleano, true si es el estudiante mayor de edad y false caso contrario
console.log('El estudiante es mayor de edad: ', estudianteNuevo.isAdult());

// cantidadMaterias() => retorna la cantidad de materias
console.log('la cantidad de materias es: ', estudianteNuevo.cantidadMaterias());

// cantidadMateriasPrincipales() => retorna la cantidad de materias principales
console.log('la cantidad de materias principales es: ', estudianteNuevo.cantidadMateriasPrincipales());

// buscarMateria(materia) => retorna un string que es la materia que esta buscando,
// si no se encuentra la materia debe retornar 'vacio'
console.log('la materia buscada es: ', estudianteNuevo.buscarMateria('filo'));
