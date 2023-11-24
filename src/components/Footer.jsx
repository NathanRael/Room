export default function Footer() {
  let years = new Date().getFullYear();
  return (
    <footer class="mt-128 mb-128 mb-md-16 container-fluid d-flex justify-content-center align-items-center flex-column text-altlight w-100 row-gap-16">
        <div class="copyright">Copyright 2023 Natanael Ralaivoavy</div>
        <div class="container-fluid d-flex flex-column flex-sm-row align-items-center justify-content-evenly  w-100">
            <div class="d-flex gap-8">
                <i class="bi bi-envelope-at-fill"></i>
                <a href="mailto:Ralaivoavy.natanael@gmail.com">Ralaivoavy.natanael@gmail.com</a>
            </div>
            <div class="d-flex gap-8">
                <i class="bi bi-github"></i>
                <a href="https://github.com/NathanRael/" target="_blank">NathanRael</a>
            </div>
            <div class="d-flex gap-8">
                <i class="bi bi-facebook"></i>
                <a href="#">Ralaivoavy Natanael</a>
            </div>
        </div>
    </footer>
  );
}
