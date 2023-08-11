import "./aboutHeader.css";

type AboutHeaderType = {
  title: string;
  type: string;
};

const AboutHeader = ({ title, type }: AboutHeaderType) => {
  return (
    <header className="about-header">
      <div className="about-header__container">
        <h1 className="about-header__title">{title}</h1>
        <span> + more {type}</span>
      </div>
      <div className="about-header__divider" />
    </header>
  );
};

export default AboutHeader;
