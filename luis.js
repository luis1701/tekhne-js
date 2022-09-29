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