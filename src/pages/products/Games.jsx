import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2, Trophy, Users, Zap, Star, Target, Puzzle, Dice1, Sword, Crown, Gem, Timer } from "lucide-react";

const gameCategories = [
  {
    title: "Half-screen Game Display",
    games: ["Bubble", "Fruit Slots HD", "Ball", "Progressive Slots"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Half-screen Game Display",
    games: ["Card Games/21", "Deck", "Box", "Fruits"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Full-screen Home Display",
    games: ["Blast", "Ball/Brick HD", "Triomino", "Roulette Game"],
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "Full-screen Home Display",
    games: ["Darts Ball", "Starcraft", "Merge Match", "Tropical Quiz"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Full-screen Game Display",
    games: ["Piano", "Connect 4", "Puzzle Swap", "Roulette"],
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Full-screen Home Display",
    games: ["Triomino.IO", "Air Hockey", "Solitaire", "Basket Ball"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Full-screen Game Display",
    games: ["Fruits Slot HD", "Dice Game 2", "Roulette", "Platform Dash"],
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    title: "Full-screen Game Display",
    games: ["Bubble Blast", "Connect 4", "Fruit/Slot", "Slots"],
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Online Game Display",
    games: ["Triomino", "Sequence/Tile"],
    color: "from-teal-500/20 to-green-500/20"
  },
  {
    title: "Online Game Display",
    games: ["Dice Games", "LifeSign"],
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    title: "Online Game Display",
    games: ["StarCraft", "Connect 4"],
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    title: "Multiplayer Online Game Display",
    games: ["DartsKiller", "Yatzhee"],
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    title: "Multiplayer Online Game Display",
    games: ["Sequence/Tile", "Casino"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Multiplayer Online Versus Display",
    games: ["Sea Battle", "Triomino Online"],
    color: "from-sky-500/20 to-blue-500/20"
  },
];

const gameFeatures = [
  { icon: Gamepad2, title: "Cross-Platform", description: "Play on Android, iOS, and Web seamlessly." },
  { icon: Trophy, title: "Leaderboards", description: "Global and friend leaderboards for competition." },
  { icon: Users, title: "Multiplayer", description: "Real-time multiplayer gaming experience." },
  { icon: Zap, title: "Fast Performance", description: "Optimized for smooth 60 FPS gameplay." },
  { icon: Star, title: "Achievements", description: "Unlock achievements and earn rewards." },
  { icon: Target, title: "Daily Challenges", description: "Fresh challenges every day to keep players engaged." },
];

const Games = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#05070a]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-cyan-900/30">
            <div className="animated-grid absolute inset-0" />
          </div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              Game Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Game Development</span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#b5b0b0] mb-8 max-w-2xl leading-relaxed">
              From casual puzzles to multiplayer adventures, we create engaging games that captivate players. Our game development expertise spans multiple genres and platforms, delivering entertainment experiences that keep users coming back.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Your Game Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button variant="heroOutline" size="lg" className="text-white border-white/20 hover:bg-white/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="py-20 relative bg-[#0b0e12]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Game Development <span className="gradient-text">Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="glass-card border border-white/10 p-6 rounded-xl hover:bg-white/5 transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20 group-hover:bg-purple-500/20 transition-all">
                    <IconComponent size={28} className="text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-[#b5b0b0] text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Game Categories Showcase */}
      <section className="py-20 lg:py-28 relative bg-[#0b0e12]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Our Game <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-[#b5b0b0] text-lg max-w-2xl mx-auto">
              Explore our diverse collection of games across various genres
            </p>
          </div>

          <div className="space-y-8">
            {gameCategories.map((category, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </span>
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {category.games.map((game, gameIndex) => (
                    <div 
                      key={gameIndex}
                      className={`bg-gradient-to-br ${category.color} p-4 rounded-lg text-center hover:scale-105 transition-transform cursor-pointer border border-white/5`}
                    >
                      <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                        {gameIndex === 0 && <Puzzle size={32} className="text-purple-400" />}
                        {gameIndex === 1 && <Dice1 size={32} className="text-cyan-400" />}
                        {gameIndex === 2 && <Sword size={32} className="text-pink-400" />}
                        {gameIndex === 3 && <Crown size={32} className="text-yellow-400" />}
                      </div>
                      <p className="text-sm font-medium text-white">{game}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Development Process */}
      <section className="py-20 relative bg-[#0b0e12]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Game Development <span className="gradient-text">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Concept & Design", description: "Game mechanics, storyline, and visual design planning." },
              { step: 2, title: "Development", description: "Building game logic, graphics, and user interface." },
              { step: 3, title: "Testing", description: "Quality assurance, bug fixing, and performance optimization." },
              { step: 4, title: "Launch & Support", description: "App store submission and ongoing maintenance." },
            ].map((item) => (
              <div key={item.step} className="glass-card border border-white/10 p-6 rounded-xl text-center hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white flex items-center justify-center font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#b5b0b0] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative bg-[#0b0e12]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Build Your <span className="gradient-text">Next Game?</span>
            </h2>
            <p className="text-[#b5b0b0] text-lg mb-8">
              Turn your game idea into reality with our expert development team
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Game Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button variant="heroOutline" size="lg" className="text-white border-white/20 hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Games;
