import { title_font } from "../styles/fonts";

const AdBlockModal = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="adblock-modal">
      <div>
        <h2 className={title_font.className}>Inner Wealth Journey</h2>
        <p className="subtitle">We see that you use an ad blocker...</p>
        <p>
          Honestly we get it. But all our content is free so we depend on ad
          revenue to continue creating quality content. We hope you understand.
        </p>
        <p>Please deactivate it and reload the page.</p>
      </div>
    </div>
  );
};

export default AdBlockModal;
