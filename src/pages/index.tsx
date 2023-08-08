import Card from "@/components/Card";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto my-8 px-8 mb-4">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-primary ">
            Hi I`m <br /> Aditya Argadinata
          </h1>
          <p className="text-sm leading-7 text-secondary">
            I`m just make this website for my portfolio. i hope you like it.
            site for sharing my experience and my knowledge. I am a web software
            engineer, and my principle in web development is to create simple
            and friendly user interfaces.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-primary font-semibold mt-8 mb-4">
            Projects
          </h2>
          <Card />
        </div>

        <div>
          <h2 className="text-2xl text-primary font-semibold mt-8 mb-4">
            cooming soon...
          </h2>
          <p className="text-sm leading-7 text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit voluptatum aut porro in cum culpa rem nulla aliquam
            quam fugiat sed magnam, hic, dolore, molestiae minima labore
            doloribus at pariatur quo amet error odio. Modi fuga fugit corrupti
            itaque asperiores necessitatibus et, ea nam quod fugiat quaerat,
            explicabo quas, eveniet ullam voluptas provident adipisci veritatis
            consequatur! Libero obcaecati, nemo id fugiat accusamus est quo a
            quaerat? Alias corporis quae animi eaque, molestias vero distinctio
            magnam perferendis esse quaerat deleniti earum praesentium fuga
            harum, tenetur est? Impedit, aspernatur saepe? Maiores saepe eos
            fuga provident voluptate velit animi doloremque obcaecati, sed unde.
          </p>
        </div>
      </div>
    </Layout>
  );
}
