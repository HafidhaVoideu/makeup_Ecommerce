import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div
      style={{
        margin: "8rem auto",
        width: "max-content",
      }}
    >
      <ReactLoading type="spin" color="#c6c6c6" height={175} width={175} />;
    </div>
  );
};

export default Loading;
