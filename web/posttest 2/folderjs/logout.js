var logout = document.getElementById('logout');
logout.addEventListener('click', function(event) {
  // Hapus data session storage yang berkaitan dengan pengguna yang sedang login
  sessionStorage.removeItem('loggedInUser');

  // Redirect ke halaman login
  window.location.href = '../folderhtml/login.html';

  event.preventDefault(); // Untuk mencegah hyperlink melakukan aksi default (mengarahkan ke halaman baru)
});