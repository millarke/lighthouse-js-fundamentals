let sound = "";

 function laugh(num)
{
    for (let i = num; i > 0; i--)
    {
      sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
}

console.log(laugh(3));


