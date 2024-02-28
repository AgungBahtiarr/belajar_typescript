export const dataUnion = () => {
    // Tipe data yang dapat dirubah berdasarkan tipe data yang sudah ditentukan
    let sample: number | string | boolean = "Agung";
    console.log(sample);

    sample = 100;
    console.log(sample);

    sample = false
    console.log(sample)

    // sample = [10,11,12];  akan terjadi error karena array tidak termasuk tipe data yang ditentukan

}
