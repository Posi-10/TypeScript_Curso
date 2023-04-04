(()=>{
    let isSuperman:boolean = true;
    let isBatman:boolean = false;

    console.log({isSuperman});
    console.log({isBatman});

    isSuperman = true && false;
    isSuperman = true && true;

    isSuperman = isBatman ? true : false;

    console.log({isSuperman});
})()