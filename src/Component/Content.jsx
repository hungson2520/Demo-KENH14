import React from "react";
import "../Style/PostItem.css";
import PostItem from "./PostItem";
import "../Style/Content.css";

function Content() {
  return (
    <div className="Content">
      <div className="Content_Post">
        <PostItem
          title="SEA GAME"
          category="Thể thao"
          image="https://kenh14cdn.com/zoom/180_113/203336854389633024/2023/5/16/photo1684239952721-16842399531181633442784.jpeg"
          content="Việt Nam dành chiến thắng tại kỳ sea game.Người hâm mộ Việt Nam luôn dành những sự yêu quý dành cho đội nhà..."
        />
      </div>

      <div className="Content_Post">
        <PostItem
          title="Trấn Thành tham gia NALA mùa 5"
          category="Giải Trí"
          image="https://kenh14cdn.com/zoom/220_289/203336854389633024/2023/5/18/photo1684376462103-1684376462282750518750.jpg"
          content=" Trấn Thành khóc ngay trên sóng truyền hình của Người ấy là ai, Trấn Thành liên tục khóc , khóc quá chừng..."
        />
      </div>
      <div className="Content_Post">
        <PostItem
          title="Lật mặt 6 của Lý Hải"
          category="Giải Trí"
          image="http://kenh14cdn.com/zoom/280_175/203336854389633024/2023/5/17/photo1684289128428-16842891285711414281859.jpg"
          content="Lật Mặt 6 của Lý Hải có nguy cơ bị đổ vỡ . Mặc dù anh thu về gần 300 tỷ nhưng theo anh chia sẻ thì ..."
        />
      </div>
      <div className="Content_Post">
        <PostItem
          title="Rò rỉ hình ảnh của Iphone 15 mới"
          category="Công Nghệ"
          image="http://kenh14cdn.com/zoom/280_175/203336854389633024/2023/5/7/photo1683433681249-16834336814781519222854.jpg"
          content="Iphone 15 sẽ có 1 một màu mới đẹp đẽ hơn, giá tiền cũng sẽ sốc tới tận óc luôn..."
        />
      </div>
      <div className="Content_Post">
        <PostItem
          title="Du lịch Phú Quốc"
          category="Giới trẻ"
          image="http://kenh14cdn.com/zoom/280_175/pr/2022/photo1663240290247-1663240290369793594048-63799170813794.jpg"
          content="Thiên đường du lịch mới nổi tại Phú Quốc là một nơi du lịch lý tưởng cho các cặp đôi ,FA thì nên ở nhà..."
        />
      </div>
    </div>
  );
}

export default Content;
