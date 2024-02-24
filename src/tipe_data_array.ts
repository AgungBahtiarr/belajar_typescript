export const dataArray = () => {
    const names: string[] = ["agung", "bahtiar", "rafi", "ahmad", "santoso"];
    console.log(names);

    // Read only array
    const readOnly: ReadonlyArray<string> = ["Agung"];
    // readOnly[0] = agung; // Index signature in type 'readonly string[]' only permits reading.

    // Tuple, array yang panjang dan tipe data nya sudah ditentukan sejak awal
    const myTuple: readonly [string, number, string] = ["Agung", 1, "bahtiar"];
    console.log(myTuple);
};
