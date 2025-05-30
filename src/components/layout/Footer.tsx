import "../../App.css";

export default function Footer({ footerText }: { footerText: string }) {
  return (
    <footer>
      <div className="footer-text">
        {footerText}
      </div>
    </footer>
  );
}
