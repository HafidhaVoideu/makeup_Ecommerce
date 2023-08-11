import "./editor.css";
type EditorProps = {
  name: string;
  img: string;
  role: string;
};

const Editor = ({ name, img, role }: EditorProps) => {
  return (
    <article className="editor">
      <img className="editor__img" src={img} />

      <div className="editor__content">
        <h1 className="editor__title">{name}</h1>
        <span className="editor__role">{role}</span>
      </div>
    </article>
  );
};

export default Editor;
