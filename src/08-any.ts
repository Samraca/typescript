(()=>{
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as String).toLowerCase(); //Cast option 1
  console.log('rta', rta);

  myDynamicVar = 1212121212;
  const rta2 = (<number>myDynamicVar).toFixed(); //Cast option 2
  console.log('rta2', rta2);
})();
