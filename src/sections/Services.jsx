import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Services = () => {
  const text = `I build secure, high-preformance full-stack apps with smooth UX to drive growth not headaches.`;
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"service"}
        text={text}
        textColor={"text-white"}
      />
    </section>
  );
};

export default Services;
