export default function Footer() {
  let years = new Date().getFullYear();
  return (
    <footer className="bg-secondary mb-128 mb-md-16 container-fluid d-flex justify-content-center align-items-center flex-column text-altlight w-100 row-gap-16 ">
        <div className="container-fluid d-flex flex-column flex-sm-row align-items-center justify-content-evenly  w-100">
            <div className="d-flex gap-8 _link">
                <i className="bi bi-envelope-at-fill"></i>
                <a href="mailto:Ralaivoavy.natanael@gmail.com">Ralaivoavy.natanael@gmail.com</a>
            </div>
            <div className="d-flex gap-8 _link">
                <i className="bi bi-github"></i>
                <a href="https://github.com/NathanRael/" target="_blank">NathanRael</a>
            </div>
            <div className="d-flex gap-8 _link">
                <i className="bi bi-facebook"></i>
                <a href="https://www.facebook.com/profile.php?id=100087957505977">Ralaivoavy Natanael</a>
            </div>
        </div>
        <div className="copyright _link">Copyright 2023 Natanael Ralaivoavy</div>
    </footer>
  );
}
