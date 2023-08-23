import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div
      style={{
        margin: "auto auto",
        width: "max-content",
      }}
    >
      <ReactLoading type="spin" color="#c6c6c6" height={140} width={140} />;
    </div>
  );
};

export default Loading;
