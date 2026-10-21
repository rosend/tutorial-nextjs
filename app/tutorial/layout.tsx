// Layout anidado: solo envuelve las rutas que están dentro de app/tutorial/.
// Agrega el menú lateral sin repetirlo en cada página.

import MenuLateral from "@/components/MenuLateral";

export default function TutorialLayout({ children }: LayoutProps<"/tutorial">) {
  return (
    <div className="tutorial">
      <MenuLateral />
      <main className="articulo">{children}</main>
    </div>
  );
}
