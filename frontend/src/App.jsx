import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4">
      <SignedOut>
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
            Welcome to ClerkApp! ✨
          </h1>
          <div className="group relative inline-block">
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white px-8 py-4 rounded-full text-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-purple-900/50">
                Get Started Now 🚀
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </button>
            </SignInButton>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: '⚡', title: 'Lightning Fast', color: 'text-yellow-300' },
              { icon: '🔒', title: 'Secure', color: 'text-blue-300' },
              { icon: '🎨', title: 'Customizable', color: 'text-green-300' }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <span className={`text-4xl ${feature.color}`}>{feature.icon}</span>
                <h3 className="text-white text-xl mt-3 font-medium">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="text-center animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
            Welcome Back! 🎉
          </h1>
          <div className="relative">
            <UserButton appearance={{
              elements: {
                userButtonAvatarBox: "w-16 h-16 border-4 border-white/30",
                userButtonPopoverCard: "bg-white/20 backdrop-blur-xl"
              }
            }} />
            <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-lg -z-10 animate-pulse"></div>
          </div>
          <p className="mt-6 text-xl text-white/90 font-medium">
            Ready to create something amazing? 🚀
          </p>
        </div>
      </SignedIn>
    </div>
  );
}