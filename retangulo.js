//Área e Perímetro do retângulo

var rect = {
    perimeter: function(x,y){
        return(2*(x,y));
    },
    area: function(x,y){
        return(x*y);
    }
};

function solveRect(l,b){
    console.log('Solução parao retângulo l=' + l + 'e b =' + b );
    if (l < 0 || b < 0){
        console.log('As dimensões do retângulo devem ser maior que zero: l=' + l + ', e b+' +b);
        } else {
            console.log('A área do retângulo com dimensões comprimento =' + l + 'e largura =' + b + ' e ' + rect.area(l,b));
            console.log('O perímetro do retângulo com dimensões comprimento =' + l + 'e largura =' + b + ' e ' + rect.perimeter(l,b));
        }
    }

    solveRect(3,5);
