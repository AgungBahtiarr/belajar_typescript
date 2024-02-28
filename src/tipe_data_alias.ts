
// Type alias untuk union type
export type Id = string | number;


export type Person = {
    id: Id;
    name: string;
    age: number;
    isMaried: false;
}

export const dataAlias = () => {
    const person: Person = {
        id: 1,
        name: "Agung",
        age: 20,
        isMaried: false
    }

    person.id = "1";  // Tidak akan error

    // person.name = 1; Type 'number' is not assignable to type 'string'


}