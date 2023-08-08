import Certificate from "@/components/Certificate";
import Layout from "@/components/Layout";
import Timeline from "@/components/Timeline";

import { aboutMe } from "./constant";

export default function About() {
  return (
    <Layout>
      <main className="container mx-auto my-8 px-8 space-y-8">
        <div className="mx-auto w-24 h-24 bg-slate-200 rounded-full"></div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Aditya Argadinata
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Students & software engineer
          </p>
        </div>

        <div>
          <p className="text-sm leading-7 text-secondary">
            I am a Full Stack JavaScript Developer with a passion for crafting
            robust and userfriendly web applications. With expertise in both
            frontend and backend technologies, I bring a wellrounded approach to
            building seamless digital experiences.
          </p>
        </div>

        <Timeline aboutMe={aboutMe} />

        <h2 className="text-2xl text-primary font-semibold mt-8 mb-4">
          Certificate
        </h2>
        <Certificate />
      </main>
    </Layout>
  );
}
