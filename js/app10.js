const angulos = [ , , ,];
for(let i=0;i<angulos.length;i++)
{
    while(isNaN(angulos[i]))
    {
      angulos[i] = parseInt(prompt(`Ingresa Ángulo #${i+1}:`));
        if (isNaN(angulos[i])) 
        {
         alert("Por favor, ingresa números válidos.");
        }
    }
}
if ((angulos[0]+angulos[1]+angulos[2])==180)
    {
      alert(`Éste triangulo es valido.\n${angulos[0]} + ${angulos[1]} + ${angulos[2]} = 180`);
    }else {
           alert(`Éste triangulo no es valido.\n${angulos[0]} + ${angulos[1]} + ${angulos[2]} ≠ 180`);
          }