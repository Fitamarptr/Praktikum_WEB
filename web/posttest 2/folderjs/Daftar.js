const tombol = document.getElementById('regis')
tombol.onclick = regis


function regis(e){
    e.preventDefault()
    // Mendapatkan nilai input dari user
    const user = document.getElementById('daft_user').value;
    const email = document.getElementById('daft_email').value;
    const password = document.getElementById('daft_pass').value;

    // Memeriksa apakah nilai input kosong
    if (user === '' || email === '' || password === '') {
        alert('Maaf. Nama, Email, atau Password tidak boleh kosong');
    } else {
        // Mendapatkan data yang tersimpan di local storage atau membuat array kosong jika belum ada data yang tersimpan
        let users = JSON.parse(localStorage.getItem('Users')) || [];

        // Menambahkan data user terbaru ke dalam array
        users.push({ name: user, email: email, password: password });

        // Menyimpan array users ke dalam local storage
        localStorage.setItem('Users', JSON.stringify(users));

        alert('Pendaftaranmu Berhasil');
        document.getElementById('form-regis').reset();
        window.location.href = '../folderhtml/login.html';
        }
}