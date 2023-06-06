import Category from "./Category";
import React from "react";
import "../Style/ListCategory.css";
function ListCategory() {
  return (
    <div className="list-category">
      <div className="category-row">
        <Category
          category={"Công Nghệ"}
          imageSrc={
            "https://kenh14cdn.com/zoom/340_213/203336854389633024/2023/5/15/photo1684163487406-16841634877771075953286.jpeg"
          }
          title={"IPHONE 15 Sắp ra mắt rồi"}
          description={
            "Bà Tân Vlog có thể kiếm được bao nhiêu tiền từ kênh YouTube cá nhân?"
          }
          description1={
            "Sai lầm nguy hiểm khi chụp ảnh trên iPhone: Chúng ta đã tự để lộ vị trí cho kẻ xấu chỉ vì ..."
          }
        />
        <Category
          category={"Thời Sự"}
          imageSrc={
            "https://i1-vnexpress.vnecdn.net/2023/05/18/55261666776989-1684384961-9528-1684384969.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=ZueTp65-Gsnyc9is2eh0SA"
          }
          title={"Cấm xe qua hầm sông Sài Gòn trong 7 buổi tối"}
          description={"Bình Dương có tân Chủ tịch HĐND"}
          description1={
            " Ôtô được chạy tối đa 80 km/h trên cao tốc Vĩnh Hảo - Phan Thiết, Nha Trang - Cam Lâm"
          }
        />
      </div>
      <div className="category-row">
        <Category
          category={"Giải trí"}
          imageSrc={
            "https://kenh14cdn.com/zoom/340_213/203336854389633024/2023/5/15/photo1684163487406-16841634877771075953286.jpeg"
          }
          title={"IPHONE 15 Sắp ra mắt rồi"}
          description={
            "Bà Tân Vlog có thể kiếm được bao nhiêu tiền từ kênh YouTube cá nhân?"
          }
          description1={
            "Sai lầm nguy hiểm khi chụp ảnh trên iPhone: Chúng ta đã tự để lộ vị trí cho kẻ xấu chỉ vì ..."
          }
        />
        <Category
          category={"Thể Thao"}
          imageSrc={
            "https://i1-thethao.vnecdn.net/2023/05/18/Untitled-5738-1684361081.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=wQLpJq-hTSnMv-VA0DckVA"
          }
          title={"Man City biến Real thành cựu vương Champions League"}
          description={"SEA Games 32 bế mạc"}
          description1={"Báo Indonesia: 'Thủ môn Thái Lan như võ sĩ wushu'"}
        />
      </div>
      <div className="category-row">
        <Category
          category={"Đời Sống"}
          imageSrc={
            "https://kenh14cdn.com/zoom/340_213/203336854389633024/2023/5/15/photo1684163487406-16841634877771075953286.jpeg"
          }
          title={"IPHONE 15 Sắp ra mắt rồi"}
          description={
            "Bà Tân Vlog có thể kiếm được bao nhiêu tiền từ kênh YouTube cá nhân?"
          }
          description1={
            "Sai lầm nguy hiểm khi chụp ảnh trên iPhone: Chúng ta đã tự để lộ vị trí cho kẻ xấu chỉ vì ..."
          }
        />
        <Category
          category={"Giáo Dục"}
          imageSrc={
            "https://i1-vnexpress.vnecdn.net/2023/05/17/businessinformationtechnology-2055-3093-1684321000.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=R5d7nGZW1jaunSHVscHwuw"
          }
          title={"Học Ngành Công Nghệ Thông Tin"}
          description={"Tỷ lệ chọi lớp 10 Phổ thông Năng khiếu cao nhất 5 năm"}
          description1={"1 chọi 31 vào lớp 10 chuyên Anh của Hà Nội"}
        />
      </div>
      <div className="category-row">
        <Category
          category={"Pháp Luật"}
          imageSrc={
            "https://kenh14cdn.com/zoom/340_213/203336854389633024/2023/5/15/photo1684163487406-16841634877771075953286.jpeg"
          }
          title={"IPHONE 15 Sắp ra mắt rồi"}
          description={
            "Bà Tân Vlog có thể kiếm được bao nhiêu tiền từ kênh YouTube cá nhân?"
          }
          description1={
            "Sai lầm nguy hiểm khi chụp ảnh trên iPhone: Chúng ta đã tự để lộ vị trí cho kẻ xấu chỉ vì ..."
          }
        />
        <Category
          category={"Giới Trẻ"}
          imageSrc={
            "https://kenh14cdn.com/zoom/340_213/203336854389633024/2023/5/15/photo1684163487406-16841634877771075953286.jpeg"
          }
          title={"IPHONE 15 Sắp ra mắt rồi"}
          description={
            "Bà Tân Vlog có thể kiếm được bao nhiêu tiền từ kênh YouTube cá nhân?"
          }
          description1={
            "Sai lầm nguy hiểm khi chụp ảnh trên iPhone: Chúng ta đã tự để lộ vị trí cho kẻ xấu chỉ vì ..."
          }
        />
      </div>
    </div>
  );
}

export default ListCategory;
