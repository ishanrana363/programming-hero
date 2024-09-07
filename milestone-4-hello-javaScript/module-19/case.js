const schoolName = "Mirjapur High School";

console.log(schoolName.toLowerCase());

console.log(schoolName.toUpperCase());

const subject = "math";
const chemistry = "Math";

if(subject.toLowerCase()===chemistry.toLowerCase()){
    console.log(`exam khub kharap hoysa`);
}else{
    console.log(`exam vlo hoysa`);
}

const html = "markuplanguage ";
const css = "markuplanguage";

if(html.trim()===css.trim()){
    console.log(`tumi website design korta parba`);
}else{
    console.log(`tumi website develop korta parba`);
}