function fruitNut(fruit){
    fruit = fruit.toLowerCase();

    if(fruit === 'grapefruit'){
        console.log(`                  
        __     /,)
   _,-""\`'""-./,
   \ "-.  .  /,  ;
 /"\`.\ |;-\/\/ :::::|
|.  \_ \`.\ X/.:::: |
|:.:. \_\/_//;:::: |
|:..   ../  |/.  \|
;::. :   "\ /.  .\;
 \:::. ..|."|\ .\/
  \`:::.: \` ./,,'
..:::::"-:.__..-"-._
   \`-._____,---'`)
   console.log('')
   console.log('Calories 60g')     
   console.log('Carbohydrates 15g')     
   console.log('Proteins 1g')     
   console.log('Sugars 11g')     
   console.log('Sodium 0g')     
   console.log('Calcium 50mg')     
   console.log('Fibers 2g')     
   console.log('Contains mostly vitamin A & vitamin C')     
        return ""
    }   else if(fruit === 'apple'){
        console.log(`         
            .:'
        __ :'__
     .'\`__\`-'__.
    :__________.-'
    :_________:
     :_________\`-;
     \`.__.-.__.'`)     
     console.log('')
        console.log('Carbohydrates ')     
        console.log('Proteins ')     
        console.log('Sugars')     
        console.log('Sodium')     
        console.log('Calcium')     
        console.log('Contains Vitamin A & C')     
        console.log('')     
        console.log('')     
        console.log('')     
        console.log('')     
        console.log('')  
        return ''     
    }   else if(fruit === 'orange'){
            console.log('60 calories')     
            console.log('No fat or sodium')     
            console.log('3 grams of fiber')     
            console.log('12 grams of sugar')     
            console.log('1 gram of protein')     
            console.log('14 micrograms of vitamin A.')     
            console.log('70 milligrams of vitamin C')
    }   else if(fruit === 'watermelon'){
        console.log('Calories: 46')     
        console.log('Sodium: 1.5mg.')     
        console.log('Carbohydrates: 11.6g')     
        console.log('Fiber: 0.6g.')     
        console.log('Sugars: 9.5g')     
        console.log('Protein: 0.9g')     
        console.log('Vitamin C: 12.5mg')
}

}

module.exports = fruitNut;