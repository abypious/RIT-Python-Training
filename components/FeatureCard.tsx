type Feature = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="card-glass p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="text-3xl">{feature.icon}</div>
      <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
    </div>
  );
}
