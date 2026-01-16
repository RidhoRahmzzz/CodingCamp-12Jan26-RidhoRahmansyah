// --- 1. OTOMATIS TAMPILKAN JAM SAAT WEBSITE DIBUKA ---
// "Halo JavaScript, tolong cari kotak bernama 'current-time' dan isi dengan jam sekarang"
document.getElementById("current-time").innerText = Date();


// --- 2. FUNGSI GANTI NAMA (Sapaan di atas) ---
function replaceName() {
    let name = prompt("Siapakah nama Anda?", "");
    if (!name) {
        document.getElementById("name").innerText = "User";
    } else {
        document.getElementById("name").innerText = name;
    }
}
replaceName(); // Jalankan fungsi tanya nama


// --- 3. FUNGSI TOMBOL SUBMIT (Agar form jalan) ---
document.forms["message-form"].addEventListener("submit", function(event) {
    event.preventDefault(); // Jangan refresh halaman

    // Ambil data dari kotak input
    const nama = document.getElementById("input-nama").value;
    const tanggal = document.getElementById("input-tanggal").value;
    const pesan = document.getElementById("input-pesan").value;
    
    // Cek radio button
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : "";

    // Validasi (Cek kosong atau tidak)
    if (nama == "" || tanggal == "" || gender == "" || pesan == "") {
        alert("Data tidak boleh kosong!");
        return false;
    }

    // Tampilkan data ke kotak hasil di kanan
    document.getElementById("res-nama").innerText = nama;
    document.getElementById("res-tanggal").innerText = tanggal;
    document.getElementById("res-gender").innerText = gender;
    document.getElementById("res-pesan").innerText = pesan;
    
    // Update jam lagi saat tombol ditekan
    document.getElementById("current-time").innerText = Date();
});// --- 1. OTOMATIS TAMPILKAN JAM SAAT WEBSITE DIBUKA ---
// "Halo JavaScript, tolong cari kotak bernama 'current-time' dan isi dengan jam sekarang"
document.getElementById("current-time").innerText = Date();


// --- 2. FUNGSI GANTI NAMA (Sapaan di atas) ---
function replaceName() {
    let name = prompt("Siapakah nama Anda?", "");
    if (!name) {
        document.getElementById("name").innerText = "User";
    } else {
        document.getElementById("name").innerText = name;
    }
}
replaceName(); // Jalankan fungsi tanya nama


// --- 3. FUNGSI TOMBOL SUBMIT (Agar form jalan) ---
document.forms["message-form"].addEventListener("submit", function(event) {
    event.preventDefault(); // Jangan refresh halaman

    // Ambil data dari kotak input
    const nama = document.getElementById("input-nama").value;
    const tanggal = document.getElementById("input-tanggal").value;
    const pesan = document.getElementById("input-pesan").value;
    
    // Cek radio button
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : "";

    // Validasi (Cek kosong atau tidak)
    if (nama == "" || tanggal == "" || gender == "" || pesan == "") {
        alert("Data tidak boleh kosong!");
        return false;
    }

    // Tampilkan data ke kotak hasil di kanan
    document.getElementById("res-nama").innerText = nama;
    document.getElementById("res-tanggal").innerText = tanggal;
    document.getElementById("res-gender").innerText = gender;
    document.getElementById("res-pesan").innerText = pesan;
    
    // Update jam lagi saat tombol ditekan
    document.getElementById("current-time").innerText = Date();
});