import React from "react";
import { useParams } from "react-router-dom";

const data = {
  jaehyeon: {
    name: "김재현",
    description: "프론트 좆밥",
  },
  yugeon: {
    name: "한유건",
    description: "병신",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </div>
  );
};

export default Profile;
