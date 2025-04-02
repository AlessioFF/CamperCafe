import { PropsWithChildren } from "react";

export function Section({
  title,
  image,
  children,
}: PropsWithChildren<{
  title: string;
  image: { src: string; alt: string };
}>) {
  return (
    <section>
      <h2
        style={{
          fontFamily: "Impact, serif",
        }}
      >
        <strong>{title}</strong>
      </h2>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "-25px",
        }}
        src={image.src}
        alt={image.alt}
      />
      {children}
    </section>
  );
}
