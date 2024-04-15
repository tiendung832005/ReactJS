type Person = {
    name: string;
    age: number;
    address:{
        city: string;
        district: string;
    };
};
function validatePerson(obj: any){
    return (
    obj.name === 'string' &&
    obj.age === 'number' &&
    obj.address === 'object' &&
    obj.address.city === 'string' &&
    obj.address.district === 'string'
    );
  }
let person1={
    name: "dũng",
    age: 19,
    address:{
        city: "hcm",
        district:"quận 1"
    }
}
if(validatePerson(person1)){
  console.log(validatePerson(person1));
}else{
  console.log(validatePerson(person1));
}

