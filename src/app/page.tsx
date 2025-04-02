import { Article } from "@/components/react/Article";
import { Section } from "@/components/react/Section";

export default function Home() {
  // TODO: Fix deserts

  return (
    <main>
      <h1 style={{ fontFamily: "Impact, serif" }}>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <hr />
      <Section
        title="Coffee"
        image={{
          alt: "coffee icon",
          src: "https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg",
        }}
      >
        <Article flavor="French Vanilla" price="3.00" />
        <Article flavor="Carael Macchiato" price="3.75" />
        <Article flavor="Pumpkin Spice" price="3.50" />
        <Article flavor="Hazelnut" price="4.00" />
        <Article flavor="Mocha" price="4.50" />
      </Section>
      <Section
        title="Desserts"
        image={{
          alt: "pie icon",
          src: "https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg",
        }}
      >
        <Article flavor="French Vanilla" price="3.00" />
        <Article flavor="Carael Macchiato" price="3.75" />
        <Article flavor="Pumpkin Spice" price="3.50" />
        <Article flavor="Hazelnut" price="4.00" />
        <Article flavor="Mocha" price="4.50" />
      </Section>
    </main>
  );
}
