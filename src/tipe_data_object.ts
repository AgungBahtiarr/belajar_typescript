const dataObject = () => {

    // Tidak recomend untuk object yang kompleks
    const person: { id: number, name: string, age: number, isMaried: false } = {
        id: 1,
        name: "Agung",
        age: 20,
        isMaried: false
    }

    // person.id = "1"; Type 'string' is not assignable to type 'number'.
}