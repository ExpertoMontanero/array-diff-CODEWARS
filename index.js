function arrayDiff(a, b) {
    var array=[];
    a.forEach((element, index)=>{
        if(b.includes(a[index])!=1)
            {
                array.push(element);
            }
    });
return array;
}
