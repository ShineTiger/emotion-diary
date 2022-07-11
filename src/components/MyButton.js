//공통컴포넌트의 props는 공통으로 들어가게 되는 데이터 타입이다.
//ex: text는 '삭제', type은 Negatvie, onClick은 이벤트..

const MyButton = ({ text, type, onClick }) => {
  return (
    <button
      //className은 문자열로 전달을 해야해서 join 메소드를 사용한다.
      //join에 띄어쓰기가 들어가면 배열의 인덱스를 띄어쓰기로 구분지어 string으로 만들겠다는 말.
      className={["MyButton", `MyButton_${type}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

//type을 전달하지 않으면 defaltProps이다.
MyButton.defaultProps = {
  type: "default",
};
export default MyButton;
