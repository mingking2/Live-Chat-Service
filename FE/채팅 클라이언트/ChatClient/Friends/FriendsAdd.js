import { useState } from "react";
import axios from "axios";

const FriendsAdd = ({ onUserAdded }) => {
  const [nickname, setNickname] = useState("");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleAddUser = async () => {
    try {
      // 서버에 유저 정보 추가 요청
      const response = await axios.post("/api/addUser", { nickname }); // 임시 api
      const newUser = response.data;

      // 백엔드에서 로그인한 유저의 친구 목록 db에 추가한 유저 정보를 추가해줘야 함

      // 유저 추가 성공 시에 onUserAdded 콜백 호출하여 친구 목록 갱신
      if (newUser) {
        onUserAdded();
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="추가할 닉네임 입력"
        value={nickname}
        onChange={handleNicknameChange}
      />
      <button onClick={handleAddUser}>친구 추가</button>
    </div>
  );
};

export default FriendsAdd;
  