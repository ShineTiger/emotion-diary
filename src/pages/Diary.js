import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  //useParams가 받아 오는 값으로 path variable을 만들고, 객체로 가져다준다
  console.log(id);
  return (
    <div>
      <h2>Diary</h2>
      <p>여기는 Diary</p>
    </div>
  );
};

export default Diary;
