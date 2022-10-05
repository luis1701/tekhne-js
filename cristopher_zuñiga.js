
class Persona{
    constructor(name, age, gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getGender(){
        return this.gender;
    }
    
    
}
const persona=new Persona("cristopher",26,"M");
console.log(persona.getName());
console.log(persona.getAge());
console.log(persona.getGender());

class Estudiante extends Persona{
    
    constructor(name,age,gender,course, school, subjects){
        super(name,age,gender);
        this.course=course;
        this.school=school;
        this.subjects=subjects;
        this.mainSubjects=["matematicas","fisica","quimica"];
    }
    getCourse(){
        return this.course;
    }
    getSchool(){
        return this.school;
    }
    getSubjects(){
        return this.subjects;
    }
    setCourse(course){
        this.course=course;
        return this.course;
    }
    setSchool(school){
        this.school=school;
        return this.school;
    }
    setsubjects(subjects){
        this.subjects=subjects;
        return this.subjects;
    }

     filterMainSubjects(){
        const filter= this.subjects.filter((elemento,indice)=>{
            for (let index = 0; index < this.mainSubjects.length; index++) {
               if(elemento==this.mainSubjects[index]){
                return true;
               }
                
            }
            
        })
        return filter;
    } 
    
    getResumenPersona(){
        
        return {
            name:this.name,
            age:this.age,
            gender:this.gender,
        }
    }
    getResumenEstudiante(){
        
        return {
            
            curso: this.course,
            colegio: this.school,

        }
    }
    isAdult(){
        
        if(this.age >= 18)
        {
            return true;
        }
        return false;
    }
    cantidadMaterias(){
        return this.subjects.length;
    }
    cantidadMateriasPrincipales(){
         /* const MainS= this.subjects.reduce((acc,elemento)=>{
            for (let index = 0; index < this.mainSubjects.length; index++) {
                if(elemento==this.mainSubjects[index]){
                 acc++;
                }
                 
             }
             return acc;
        },0);
        return MainS */ 
        return this.filterMainSubjects().length;
    }
    buscarMateria(materia){
         /* const SearchS= this.subjects.reduce((acc,elemento,indice)=>{
                if(elemento== materia){
                    acc=materia;
                    return acc;
                    
                }
                else if(indice==this.subjects.length)
                {
                    acc="vacio";
                    return acc;
                }
                
        },"");
        return SearchS; 
        return this.subjects.find(materia); */
        const SearchS=this.subjects.find(elemento=>elemento===materia)||"vacio";
        return SearchS;
    }
    // getMateriasByIndice() => retorna un objeto de la siguiente manera

// reduce
// {
//     0: "matematicas",
//     1: "ingles"
//     ...etc
// }
    getMateriaByIndice(){
        //console.log(this.subjects);
        const Indic=this.subjects.reduce((acumulador,elemento,indice)=>{
            //console.log("elemento: " + elemento + "    acumulador actual:  " + acumulador + "  indice: " + indice)
            
            return{...acumulador, [indice]:elemento};
            
        },{});
        //console.log(Indic);
        return Indic;
    }
    //funcion que permita agregar una materia a la lista de materias
    agregarMateria(materia){
        
        this.subjects.push(materia);
        
        
        return this.subjects;
    }
}


const estudiante=new Estudiante("cris",26,"M","curso-A","Umss",["matematicas","algebra","programacion","fisica"]);

console.log(estudiante.getResumenEstudiante());
console.log(estudiante.getResumenPersona());
console.log("es adulto?? " + estudiante.isAdult());
console.log("cantidad de materias: " + estudiante.cantidadMaterias());
console.log("cantidad de materias principales: " + estudiante.cantidadMateriasPrincipales());
console.log("materia encontrada: " + estudiante.buscarMateria("matematicas"));
console.log( estudiante.getMateriaByIndice());
console.log(estudiante.agregarMateria("biologia"))