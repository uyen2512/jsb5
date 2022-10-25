// bài tập quản lý tuyển sinh
function ketQuaDiem() {
    var diemChuan = document.getElementById("diemChuan").value;
    var khuVuc = Number(document.getElementById("selectAdd").value);
    var doiTuong = Number(document.getElementById("selectPer").value);
    var diem1 = Number(document.getElementById("diem1").value);
    var diem2 = Number(document.getElementById("diem2").value); 
    var diem3 = Number(document.getElementById("diem3").value);
    var tongDiem = khuVuc + doiTuong + diem1 + diem2 + diem3;
    // console.log(tongDiem);

    if (tongDiem >= diemChuan && diemChuan>0 && 0< diem1 <=10 && 0< diem2 <=10 && 0< diem3 <=10) {
        document.getElementById("btnKetQua").innerHTML = "Chúc mừng bạn đã đậu với số điểm" + " "+tongDiem
    }else{
        document.getElementById("btnKetQua").innerHTML = "Bạn đã rớt với số điểm" + " "+tongDiem
    }
}


// bài tập tính tiền điện
function tinhTienDien() {
    
    var ten = document.getElementById("ten").value;
    console.log(ten)
    var soKw = Number(document.getElementById("soKw").value);

    var tongTien = 0;
    // debugger;
    if (0 < soKw && soKw <= 50) {
        tongTien = 500 * soKw;
    } else if (50 < soKw && soKw <= 100){
        tongTien =  (500 * 50) + ((soKw - 50)*650);
    } else if (100 < soKw && soKw <= 200){
        tongTien =  (500 * 50) + (50 *650) + (soKw - 100)*850;
    } else if (200 < soKw && soKw <= 350){
        tongTien =  (500 * 50) + (50 *650) + (100 *850) + (soKw - 200) *1100;
    } else if (soKw > 350){
        tongTien =  (500 * 50) + (50 *650) + (100 *850) + (150  *1100) + (soKw - 350) *1300;
    }else{
        alert("Quên nhập số Kw")
    }
    document.getElementById("btnTinhKw").innerHTML = "Họ tên: " + ten + " , Tiền điện: " + tongTien.toLocaleString();

}