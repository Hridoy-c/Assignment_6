import Image from "next/image";
import { notFound } from "next/navigation";
import { getFitlog } from "@/lib/FitlogApi";

import DetailActions from "@/components/myplanpage/DetailActions";

const FitLogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const fitlogData = await getFitlog();

  const workout = fitlogData.find((w) => w.id === parseInt(id, 10));

  if (!workout) notFound();

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#292d33] bg-[#15181e] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:max-h-[90vh]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="font-oswald text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-3 max-w-xl text-base leading-7 text-[#9ca3af]">
            {workout.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <li key={group}>
                <span className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-black">
                  {group}
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-8 overflow-hidden rounded-2xl border border-[#292d33] bg-[#15181e]">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-4 py-4 text-sm sm:px-6 ${
                  i !== 0 ? "border-t border-[#292d33]" : ""
                }`}
              >
                <dt className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                  {spec.label}
                </dt>
                <dd className="text-white">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 text-base font-extrabold uppercase tracking-wide text-white">
            Instructions
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-[#d1d5db]">
            {workout.instructions.map((step, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#9ca3af]">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
           <DetailActions workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitLogDetailsPage;