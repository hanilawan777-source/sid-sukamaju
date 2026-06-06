document.addEventListener("DOMContentLoaded", function () {
    const formSurat = document.getElementById("formSurat");
    const notifikasi = document.getElementById("notifikasi");
    const formLogin = document.getElementById("formLogin");

    if (formSurat) {
        formSurat.addEventListener("submit", function (event) {
            event.preventDefault();

            const nik = document.getElementById("nik").value;
            const nama = document.getElementById("nama").value;
            const jenisSurat = document.getElementById("jenisSurat").value;

            if (nik.length !== 16) {
                alert("NIK harus 16 digit");
                return;
            }

            notifikasi.style.display = "block";
            notifikasi.innerHTML = `Pengajuan Berhasil. Nama: <b>${nama}</b>, Surat: <b>${jenisSurat}</b>, NIK: ${nik}.`;

            formSurat.reset();
        });
    }

    if (formLogin) {
        formLogin.addEventListener("submit", function (event) {
            event.preventDefault();
            const user = document.getElementById("username").value;
            alert(`Selamat Datang, ${user}`);
            formLogin.reset();
        });
    }
});