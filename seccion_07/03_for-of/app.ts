(() => {

  type Avenger = {
    name:string;
    weapon:string;
  };

  const ironman:Avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit'
  };

  const captanAmerica:Avenger = {
    name: 'Capitán America',
    weapon: 'Escudo'
  };

  const thor:Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
  };

  const avengers:Avenger[] = [ ironman, captanAmerica, thor ];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }

})()