
    let arrayKosong = []
    let arrayBerisi = ['akmal', 'keisin', 'alfateh']
    console.log(arrayBerisi)
    console.log(arrayBerisi.length)

    // Menambah array
    let arrayTambah = []
    arrayTambah.push('nama')
    arrayTambah.push('akmal', 'keisin', 'alfateh')
    arrayTambah.push('true')

    console.table(arrayTambah)

    // panjang array
    console.log(arrayTambah.length)

    // Ambil array
    console.log(arrayTambah[1])

    // edit array
    arrayTambah[1] = 'test'
    console.log(arrayTambah[1])

    // Delete array
    delete arrayTambah[2]
    console.log(arrayTambah)

    arrayTambah[2] = 'soft delete'
    console.log(arrayTambah)

    // array of array

    let arrayOfArray = [1,2,3,4,['1','2', true, false]]
    console.log(arrayOfArray)