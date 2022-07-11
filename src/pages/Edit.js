import { useNavigate, useSearchParams } from "react-router-dom";
// # Query String
// - Query : 웹 페이지에 데이터를 전달하는 가장 간단한 방법
// # useSerachParams
// 받아온 값들을 Query로 만들어준다.
// useParams와는 다르게
// searchParams, setSearchParams 두개로 전달받을 수 있고, 배열형식으로 반환한다.
const Edit = () => {
  //# Page moving
  //페이지를 이동시킬 수 있는 함수를 반환해준다.
  const navigate = useNavigate();

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

      <button
        //navigate라는 함수에 인자로 경로값을 전달해주면 useNavigate가 함수navigate를 호출하면서 인자에있던 경로로 옮겨준다.
        onClick={() => {
          navigate("/home");
        }}
      >
        홈으로 가기
      </button>

      <button
        //뒤로 가기 : 한번만 뒤로가면 -1을 해준다
        onClick={() => {
          navigate(-1);
        }}
      >
        홈으로 가기
      </button>
    </div>
  );
};

export default Edit;
