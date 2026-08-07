import GlassSurface from "@/components/GlassSurface";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold">Paste your GitHub username</h1>

      <GlassSurface
        width={348}
        height={48}
        borderRadius={100}
        className="mt-8"
      >
        <input
          id="user"
          type="text"
          name="user"
          placeholder="lasjdhu"
          class="block min-w-0 grow py-1.5 pr-4 pl-4 text-base text-white focus:outline-none"
        />
      </GlassSurface>
      
      <p className="max-w-lg mt-8 lg:block text-gray-400 font-semibold text-lg">
        Mintbriq is a project recommendation engine. You can input your
        GitHub username and this web app would find GitHub repositories
        that suit your skill and bring a new challenge.
      </p>
    </div>
  );
}
