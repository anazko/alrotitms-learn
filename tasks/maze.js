// лабиринт – это полупроводниковая дорожка, по которой может протекать ток, но по этой дорожке разбросаны дефекты, как пиксели. По ним ток не течет. И необходимо понять: при данном расположении дефектов проводит ли эта дорожка сигнал. 

// let maze = [
//   [1, 1, 1, 0, 0, 1],
//   [1, 1, 1, 1, 0, 1],
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 0]
// ];

let maze = [
  [1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0]
];


const checkPath = (start, end) => {

}


console.log( checkPath({x: 3, y: 0}, {x: 5, y: 5}) )




/* зайти на клетку

   осмотреться: 
    мы в нужном месте? вернуть 1

    есть проходы? составить их список, войти в каждый, осмотреться
    
    нет проходов? вернуть -1

*/