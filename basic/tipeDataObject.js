
    const obj = {}
    obj['test'] = 'test'
    obj['test2'] = 'test2'
    console.log(obj)

    // Menambah/mengubah property obj
    obj['test'] = 'test telah diubah'

    // menghabpus obj
    delete obj['test']
    console.log(obj)

    // Membuat object dengan properties
    const orang = {
      nama : "akmal keisin alfateh",
      "alamat rumah": "Indonesia",
      umur: 18 
    }
    console.log(orang)

    // Mengakses property object
    console.log(orang['nama'])
    console.log(orang.nama)
    console.log(orang['alamat rumah'])