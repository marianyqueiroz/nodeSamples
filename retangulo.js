var rect = {
    perimeter: function(x,y){
        return(2*(x,y));
    },
    area: function(x,y){
        return(x*y);
    }
};

function solveRect(l,b){
    console.log('Solução parao retangulo l=' + l + 'e b =' + b );
    if (l < 0 || b < 0){
        console.log('as dimensoes do retangulo devem ser maior que zero: l=' + l + ', e b+' +b);
        } else {
            console.log('a area do retangulo com dimensoes comprimento =' + l + 'e largura =' + b + ' e ' + rect.area(l,b));
            console.log('o perimetro do retangulo com dimensoes comprimento =' + l + 'e largura =' + b + ' e ' + rect.perimeter(l,b));
        }
    }

    solveRect(3,5);
