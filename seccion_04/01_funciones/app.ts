(() => {
  const hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activateBatisingnal = (): string => {
    return 'Batiseñal activadoa!';
  }

  console.log(typeof activateBatisingnal);

  const heroName = returnName()
})()