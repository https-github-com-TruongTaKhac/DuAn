import React from "react";

const Message = () => {
  return (
    <div className=" mt-[120px] mb-[300px] flex ">
      <div className="mx-auto flex flex-col gap-6">
        <h1 className="text-xl font-bold">Yêu cầu quyền truy cập</h1>
        <h2 className="text-lg">
          Tài khoản của bạn chưa được cấp quyền truy cập vào trang quản trị
        </h2>
        <div>
          <a
            className="p-2 bg-[#505F4E] text-white hover:opacity-80 rounded-md"
            href="/"
          >
            Về trang chủ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Message;
