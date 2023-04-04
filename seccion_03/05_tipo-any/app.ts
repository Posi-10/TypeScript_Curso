(()=>{

    let avanger: any = 123;
    let exist;
    let power;

    avanger = 'Dr Strange';
    
    // console.log(avanger.charAt(0));
    console.log((avanger as string).charAt(1));

    avanger = 150.2325615;

    console.log(<number>avanger.toFixed(3));

    console.log(exist);
    console.log(power);
})()