module.exports = function getZerosCount(number, base) {
  var arrival = [];

  if( base > 0 && base != 1)
  {

    for(var a = 2; a <= base; a++){
    while(base % a == 0 && base > 1)
      {
        arrival.push(a);
        base = base / a;
      }
    }

  } 
  //масивы множителей и степеней
    var arrivalX=[], arrivalN=[];
    var l = arrival.length;
    for (var a=0; a<=l; a++)
{
        var n=1;
        var x=arrival[0];
          for (var j=1; j<arrival.length; j++){
            if (arrival[j]==x)
             {
                n++;
            }
          }
           //массив. Добавим множитель
        arrivalX.push(x);
            //Степень в массив
        arrivalN.push(n);  
         //удаление текущего множителя из массива
        arrival=arrival.filter(element => element !==x);   
    }
//цикл
                                            
    var arrivalFact = [];
    for (var i=0; i<arrivalX.length; i++)
     {
        var factoriz = 0;
        var y = number;
          while (y >= 1) {
            y = y/arrivalX[i];
            //integer part function. функция целой части от числа

            factoriz = factoriz + Math.trunc(y);
          }
        var c = Math.trunc(factoriz/arrivalN[i]);
        arrivalFact.push(c);
    }
    var zero=arrivalFact[0];
    for (var y=1; y<=arrivalFact.length; y++)
     {
      if (arrivalFact[y]<zero) {
        zero=arrivalFact[y];
      }
    }
  return zero;
}