 //ejercicios

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
   
cantidadMaterias(){
   return this.subjects.length;

}
cantidadMateriasPrincipales(){
   return this.filterMainSubjects().length;
}


getResumenPersona(){
   return {
     name: this.name,
     age: this.age,
     gender: this.gender,

   }

}

   getResumenEstudiante() {
       return {

                 curso: this.course,
                 colegio: this.school,

       }

   }
   
   isAdult(){
       if (this.age > 18){

       }
       return true;   
       }else{
       return false;
   
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


const estudianteNuevo = new Estudiante('luis', 31, 'masculino')


console.log('nombre: ', estudianteNuevo.getName(), ' edad: ', estudianteNuevo.getAge(), ' genero: ', estudianteNuevo.getGender())


estudianteNuevo.setCourse('sexto de sec.')
estudianteNuevo.setSchool('Aleman Santa Maria')
estudianteNuevo.setSubjects(["matematicas", "ingles", "quimica", "artes", "musica"])


console.log('curso: ', estudianteNuevo.getCourse(), ' colegio: ', estudianteNuevo.getSchool(), ' materias: ', estudianteNuevo.getSubjects())


console.log('materias principales: ', estudianteNuevo.filterMainSubjects()) 