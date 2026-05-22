type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">{title}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{subtitle}</h2>
    </div>
  );
}
