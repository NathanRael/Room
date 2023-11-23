export default function Footer() {
  let years = new Date().getFullYear();
  return (
    <p className="_body text-light text-center w-100  mt-128 py-8 mb-128 mb-md-0">
      Coyright {years} Natanael Ralaivoavy
    </p>
  );
}
