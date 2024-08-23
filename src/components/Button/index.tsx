// Importación de ReactNode desde la biblioteca react, utilizado para tipificar los hijos en los componentes de React.
import { ReactNode } from "react";
import styles from "./Button.module.css";


// Definición de un tipo personalizado llamado Props, que describe las propiedades esperadas por el componente Button.
type Props = {
  // Propiedad children, que puede ser cualquier nodo React válido (incluyendo texto, elementos JSX, etc.).
  children: ReactNode;
  // Propiedad opcional isLoading, que indica si el botón está actualmente cargando. Si es true, el botón estará deshabilitado.
  isLoading?: boolean;
  // Función onClick que será ejecutada cuando el usuario haga clic en el botón.
  onClick: () => void;
};

// Componente funcional Button que recibe props según el tipo definido anteriormente.
function Button({ children, isLoading, onClick }: Props) {
  const className = [
    `btn btn-${isLoading ? "secondary" : "primary"}`,
    styles.button,
  ].join(" ");

  // Devuelve un elemento button con varias propiedades y clases dinámicas basadas en el estado de isLoading.
  return (
    <button
      // La propiedad disabled se establece en true si isLoading es verdadero, deshabilitando así el botón.
      disabled={isLoading}
      // La función onClick se asigna al evento click del botón, ejecutándose cuando el usuario hace clic.
      onClick={onClick}
      // El atributo type se establece como "button", indicando que es un botón de acción.
      type="button"
      // className={[styles.button, styles.padded].join(" ")}
      className={className}
    >
      {/* Se muestra el texto "Cargando..." si isLoading es verdadero, de lo contrario, se muestran los hijos pasados al componente. */}
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

// Exportación del componente Button para que pueda ser importado y utilizado en otros archivos.
export default Button;
