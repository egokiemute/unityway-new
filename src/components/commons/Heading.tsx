import React from "react";

interface Props {
  text: string;
  className: string;
}

const Heading = ({ text, className }: Props) => {
  return (
    <section className={`py-20 px-8 md:px-10 flex ${className}`}>
      {text}
    </section>
  );
};

export default Heading;
