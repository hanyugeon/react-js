import { useParams } from "react-router-dom";

const Article = () => {
  // id가 어디에서 사용될까?
  // App.js 에서 사용됨 가서 보셈.
  const { id } = useParams();

  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};

export default Article;
