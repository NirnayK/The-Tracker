import React from "react";
import {
  CalculatorIcon,
  InboxIcon,
  Layers,
  LockIcon,
  MergeIcon,
  Settings,
} from "lucide-react";

const IconCss = "h-6 w-6 mb-2 opacity-75";

const data = [
  {
    title: "Smart Organization",
    description:
      "Our Smart Organization feature automatically allows you to sort your data as per your preference.",
    icon: <InboxIcon />,
  },
  {
    title: "Seamless Integration",
    description:
      "Seamless Integration allows you to connect with your favorite apps and services without the app.",
    icon: <MergeIcon />,
  },
  {
    title: "Advanced Customization",
    description:
      "With Advanced Customization, you can personalize your tracking experience to suit your preferences and work style.",
    icon: <Settings />,
  },
  {
    title: "Powerful Analytics",
    description:
      "With our Analytics you can figure track all your data and make the best decisions.",
    icon: <CalculatorIcon />,
  },
  {
    title: "Reliable Security",
    description:
      "With Reliable Security, your data is always safe and protected.",
    icon: <LockIcon />,
  },
  {
    title: "Easy Collaboration",
    description:
      "Easy Collaboration allows you to share and edit documents with your team in real time.",
    icon: <Layers />,
  },
];

export default function Home() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 xl:py-24 ">
      <div className="mx-auto container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-800">
                Discover Our Unique Features
              </h1>
              <p className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">
                Our features are designed to enhance your productivity and
                streamline your workflow.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-3 gap-8">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 border-gray-200 dark:border-gray-800 p-4 rounded-lg"
                  >
                    <div className="p-2 bg-opacity-50 rounded-full">
                      {React.cloneElement(item.icon, {
                        className: IconCss,
                      })}
                    </div>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-zinc-800 dark:text-zinc-100">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
