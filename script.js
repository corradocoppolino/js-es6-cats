$(document).ready(function(){

    const cats = [

        {
            name: "Romeo",
            age: 2,
            color: "sand",
            gender: "male"
        },
        {
            name: "Mimi",
            age: 4,
            color: "yellow",
            gender: "female"
        },
        {
            name: "Kito",
            age: 6,
            color: "darkgrey",
            gender: "male"
        },
        {
            name: "Sandy",
            age: 8,
            color: "white",
            gender: "female"
        },
        {
            name: "Tuna",
            age: 10,
            color: "orange",
            gender: "male"
        }

    ]

    //mileston 1
    
    cats.forEach((element)=>{

        $("#miles1 ul").append(listGenerator(element.color,element.name));

    })

    //milestone 2

    const pink = "red";
    const blue = "blue";

    const newCats = cats.map((element)=>{

        let color = (element.gender === "female") ? pink : blue;
        let opacity = element.age / 10;

        //console.log(color);
        //console.log(opacity);

        return {
            ...element,
            // abbiamo aggiunto anche l'oggetto fiocco
            ribbon:{
                color,
                opacity
            }
        }

    });

    //console.log(newCats);

    const femaleCats = newCats.filter((element) => element.gender == "female");
    const maleCats = newCats.filter((element) => element.gender == "male");

    //console.log(femaleCats);
    //console.log(maleCats);

    femaleCats.forEach((element) => {

        $("#miles-2-female ul").append(listGenerator(element.color,element.name,element.ribbon.color,element.ribbon.opacity));

    })

    maleCats.forEach((element) => {

        $("#miles-2-male ul").append(listGenerator(element.color,element.name,element.ribbon.color,element.ribbon.opacity));

    })


    // Miles 3

    const orderCats = [...femaleCats, ...maleCats];

    console.log(orderCats);

    const catsTarget = orderCats.map((element) => {

        const {name,color,ribbon} = element;
        return{name,color,ribbon};

    })

    catsTarget.forEach((element) => {

        $("#miles-3 ul").append(listGenerator(element.color,element.name,element.ribbon.color,element.ribbon.opacity));

    })


})

function listGenerator(catColor,nome,...ribbon){

    let ribbonTag = "";
    if(ribbon.length > 0){
        ribbonTag = `<i class="fas fa-ribbon" style="color:${ribbon[0]};opacity:${ribbon[1]}"></i>`
        
    }
    let html = `
            <li>
                <i class="fas fa-cat" style="color:${catColor}"></i>
                ${ribbonTag}
                <span>${nome}</span>
            </li>
        `;

    return html;

}