import nowifi from "@/assets/images/bruh.jpg";
import { WifiIcon, CrossIcon } from "./Icons";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 md:py-6 lg:py-8 bg-gray-900 flex justify-between items-center px-4 md:px-6 w-full">
        <div className="flex items-center space-x-4">
          <WifiIcon className="w-8 h-8 text-gray-50 " />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tighter text-gray-50 ">
              Protection Wifi
            </h1>
            <time className="text-sm font-medium tracking-tight text-gray-300 ">
              {new Date().toLocaleString()}
            </time>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <CrossIcon className="hidden sm:block w-8 h-8 text-gray-50" />
          <div className="flex flex-col">
            <p className="text-xl font-bold tracking-tighter text-gray-50">
              Site bloqué :
            </p>
            <a
              className="text-md font-medium tracking-tight text-gray-300"
              href={window.location.href}
            >
              {window.location.href}
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center w-full">
        <div className="container flex items-center justify-center space-y-4">
          <div className="grid gap-8 text-center md:text-left md:grid-cols-2">
            <img
              alt="Meme"
              className="rounded-xl overflow-hidden object-cover object-center mx-auto w-11/12"
              //height="400"
              src={nowifi}
              //width="400"
            />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-900">
                Ahlalala - Pas ce site là !
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                La box a bloqué l'accès à ce site web...
                <br />
                Il n'a pas l'air de confiance.
              </p>
              <p className="text-sm text-gray-500">
                Si tu es sûr de ce que tu fais, tu peux quand même continuer,
                <br />
                Pour cela,{" "}
                <span className="italic font-bold">change de réseau WiFi</span>.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-gray-900 text-gray-50 rounded-[5px] text-center sm:text-left font-semibold tracking-tighter hover:bg-gray-700"
              >
                Je suis un fou, j'y vais quand même <br />{" "}
                <span className="italic font-light">
                  (après avoir changé de wifi)
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
