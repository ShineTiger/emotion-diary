import { useSearchParams } from "react-router-dom";
// # Query String
// - Query : 웹 페이지에 데이터를 전달하는 가장 간단한 방법
// # useSerachParams
// 받아온 값들을 Query로 만들어준다.
// useParams와는 다르게
// searchParams, setSearchParams 두개로 전달받을 수 있고, 배열형식으로 반환한다.
const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id: ", id);

  const mode = searchParams.get("mode");
  console.log("mode: ", mode);
  //setSearchParams는 QS를 변경시킬 수 있다.
  return (
    <div>
      <h2>Edit</h2>
      <p>여기는 Edit</p>
      <button onClick={() => setSearchParams({ who: "shinetiger" })}>
        QS 바꾸기
      </button>
    </div>
  );
};

export default Edit;
