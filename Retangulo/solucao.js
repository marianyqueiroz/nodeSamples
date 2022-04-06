var solucao = require('./retangulo.js');
function solveRect(l,b){
    console.log('Solução parao retângulo l=' + l + ' e b = ' + b );

      if (l < 0 || b < 0){
          console.log('As dimensões do retângulo devem ser maior que zero: l=' + l + ', e b+' +b);
          } else {
              console.log('A área do retângulo com dimensões comprimento =' + l + 'e largura =' + b + ' e ' + solucao.area(l,b));
              console.log('O perímetro do retângulo com dimensões comprimento =' + l + 'e largura =' + b + ' e ' + solucao.perimeter(l,b));
          }
    }

     solveRect(3, 4);