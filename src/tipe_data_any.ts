export const dataAny = () => {
    const person: any = {
        name: "Agung",
        age: 20,
        isMaried: false
    }

    // person.age = "Agung" tidak akan error

    console.log(person.name);
    console.log(person.age);
    console.log(person.isMaried);
}