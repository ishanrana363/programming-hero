function checkLeepYear (year) {
    if((year%4===0) && (year%100!==0||year%400===0)){
        return true;
    }else{
        return false;
    }
};

const year = 4004;
console.log(checkLeepYear(year));

