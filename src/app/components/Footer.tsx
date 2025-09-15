export default function Footer() {
  return (
    <footer>
      <div>
        <p>© {new Date().getFullYear()} GT Wash. Все права защищены.</p>
        <p>
          г. Минск, ул. Притыцкого 158А | Тел:{" "}
          <a href="tel:+375447987878">+375 (44) 798-78-78</a>
        </p>
      </div>
    </footer>
  );
}
