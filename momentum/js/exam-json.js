const obj = {
    name : 'hong',
    age : 20,
    skills : ['html','css','js']
};
//stringify,parse
const json = JSON.stringify(obj);
console.log( typeof json );
console.log( json );

const parsed = JSON.parse(json);
console.log( typeof parsed );
console.log( parsed );