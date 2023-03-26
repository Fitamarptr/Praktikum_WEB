const tombol = document.getElementById('kirim')
tombol.onclick = simpan

function simpan(e) {
    e.preventDefault();

    // ambil nilai dari setiap input
    var name = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    // var country = document.getElementById('country').value;
    var address = document.getElementById('alamat').value;
    var gender = document.getElementById('gender').value;
    var tgl_lahir = document.getElementById('tgl_lahir').value;
    var kategori = document.querySelector('input[name="Kategori"]:checked').value;
    var hobi = Array.from(document.querySelectorAll('input[name="Hobi"]:checked')).map(function(hobi) {
        return hobi.value;
    });
    var masukan = document.getElementById('masukan').value;

    // buat objek untuk menyimpan nilai dari setiap input
    var data = JSON.parse(sessionStorage.getItem('data')) || [];
    data.push({
        'Nama Lengkap' : name,
        'Email' : email,
        'Alamat' : address,
        'Jenis Kelamin' : gender,
        'Tanggal Lahir' : tgl_lahir,
        'Kategori' : kategori,
        'Hobi' : hobi,
        'Masukan' : masukan,
    })

    // simpan objek ke dalam session storage
    sessionStorage.setItem('data', JSON.stringify(data));
    alert('Data Anda Berhasil Dikirim');
    window.location.href="../folderhtml/tampil_data.html"

    document.getElementById('form').reset();
}