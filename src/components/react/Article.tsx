import { CSSProperties } from "react";

export function Article({ flavor, price }: { flavor: string; price: string }) {
  const p_styles: CSSProperties = {
    display: "inline-block",
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "18px",
  };

  const flavor_styles: CSSProperties = {
    textAlign: "left",
    width: "75%",
  };

  const price_styles: CSSProperties = {
    textAlign: "right",
    width: "25%",
  };

  return (
    <article>
      <p style={{ ...p_styles, ...flavor_styles }}>{flavor}</p>
      <p style={{ ...p_styles, ...price_styles }}>{price}</p>
    </article>
  );
}
