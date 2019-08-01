export const LY_SU = "lysu";
export const ONG_HUT_INOX = "onghutinox";
export const TUI_VAI = "tuivai";
export const BINH_THUY_TINH = "binhthuytinh";

export const GiftResource = {
  onghutinox: {
    image: "./images/onghutinox.png", //TODO image url
    label: "Ống hút inox",
    width: "50%"
  },
  tuivai : {
    image: "./images/tuivai.png",
    label: "Balo vải canvas",
    width: "40%"
  },
  lysu : {
    image: "./images/lysu.png",
    label: "Ly Sứ",
    width: "70%",
  },
  binhthuytinh : {
    image: "./images/binhnuoc.png",
    label: "Bình nước thủy tinh",
    width: "25%"
  }
};

export const GiftOutDegree = {
  lysu: [2,9],
  tuivai: [1,6],
  onghutinox: [3,5,7,10],
  binhthuytinh: [4, 8]
};

export const TrashType = ["chai", "lynhua", "hopnhua", "nylon", "others"];

export const Questions = {
  chai: {
    label: "chai nhựa",
    correctAnswers: [
      "92.5% xác của loài hải âu có chứa nhựa",
      "1000 sinh mạng loài rùa biển mỗi năm",
      "13. 2000 hạt vi nhựa trong 1 lít nước uống đóng chai",
      "817 loài sinh vật biển bị tác động bởi ô nhiễm rác nhựa",
      "Ăn vào 50.000 hạt vi nhựa mỗi năm"
    ],
    wrongAnswers1:[
      "50 năm ô nhiễm đại dương",
      "Sự nhanh chóng",
      "1% loài Hải Âu ở đại Dương có chứa rác nhựa",
      "Gọn nhẹ, dễ dùng",
      "20 năm ô nhiễm môi trường"
    ],
    wrongAnswers2: [
      "Rác nhựa trên biển chỉ chiếm 10%",
      "Đa năng",
      "Sự tiện lợi",
      "50000đ/lốc",
      "5000đ"
    ]
  },
  nylon: {
    label: "túi ni lông",
    correctAnswers: [
      "92.5% xác của loài hải âu có chứa nhựa",
      "1000 sinh mạng loài rùa biển mỗi năm",
      "13. 2000 hạt vi nhựa trong 1 lít nước uống đóng chai",
      "817 loài sinh vật biển bị tác động bởi ô nhiễm rác nhựa",
      "Ăn vào 50.000 hạt vi nhựa mỗi năm"
    ],
    wrongAnswers1:[
      "50 năm ô nhiễm đại dương",
      "Sự nhanh chóng",
      "1% loài Hải Âu ở đại Dương có chứa rác nhựa",
      "Gọn nhẹ, dễ dùng",
      "20 năm ô nhiễm môi trường"
    ],
    wrongAnswers2: [
      "Rác nhựa trên biển chỉ chiếm 10%",
      "Đa năng",
      "Sự tiện lợi",
      "50000đ/lốc",
      "5000đ"
    ]
  },
  lynhua: {
    label: "ly nhựa",
    correctAnswers: [
      "500 năm ô nhiễm đại dương",
      "Tính mạng gần 1 triệu người bị ảnh hưởng bởi ô nhiễm môi trường",
      "Ăn vào 50.000 hạt vi nhựa mỗi năm",
      "80% rác thải nhựa từ đất liền trôi dạt ra biển",
      "2000 hạt vi nhựa trong 1 lít nước uống đóng chai"
    ],
    wrongAnswers1:[
      "5000đ",
      "3000đ/lốc",
      "Đa năng",
      "Sinh mạng 200 động vật biển mỗi năm",
      "20% loài Hải Âu ở đại dương có chứa rác nhựa trong cơ thể"
    ],
    wrongAnswers2: [
      "100 ngày ô nhiễm đại dương",
      "20 năm ô nhiễm môi trường",
      "Rác nhựa trên biển chỉ chiếm 10%",
      "Sự nhanh chóng",
      "100.000đ/Kg"
    ]
  },
  hopnhua: {
    label: "hộp nhựa", //bao ni long?
    correctAnswers: [
      "500 năm ô nhiễm đại dương",
      "99% loài chim biển sẽ phải ăn rác nhựa",
      "8 hạt vi nhựa trong phần thịt mỗi con nghêu hào",
      "Làm mất 50% giá trị của một mẻ cá ngư dân đánh bắt",
      "100.000 động vật biển chết đi mỗi năm"
    ],
    wrongAnswers1:[
      "1% loài Hải Âu ở đại Dương có chứa rác nhựa",
      "1 hạt vi nhựa trong mỗi con nghêu",
      "1 tháng ô nhiễm môi trường",
      "25000đ/12 cái",
      "50 năm ô nhiễm đại dương"
    ],
    wrongAnswers2: [
      "100đ",
      "Sự tiện lợi",
      "300đ",
      "Sự tiện lợi nhanh chóng",
      "1 hạt vi nhựa trong mỗi con nghêu"
    ]
  },
  others: {
    label: "món đồ nhựa",
    correctAnswers: [
      "Rối loạn hoocmon cơ thể",
      "Tính mạng gần 1 triệu người bị ảnh hưởng bởi ô nhiễm môi trường",
      "Làm mất 50% giá trị của một mẻ cá ngư dân đánh bắt",
      "817 loài sinh vật biển bị tác động bởi ô nhiễm rác nhựa",
      "80% rác thải nhựa từ đất liền trôi dạt ra biển"
    ],
    wrongAnswers1:[
      "50000đ/lốc",
      "Gọn nhẹ, dễ dùng",
      "Rác nhựa trên biển chỉ chiếm 10%",
      "1 tháng ô nhiễm môi trường",
      "100 con rùa bị nguy hiểm mạng sống mỗi năm"
    ],
    wrongAnswers2: [
      "Gọn nhẹ, dễ dùng",
      "30 hạt vi nhựa vào cơ thể",
      "Sự tiện lợi nhanh chóng",
      "10000d/lốc",
      "3000đ/lốc"
    ]
  }

};