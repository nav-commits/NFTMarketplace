import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const FEATURED_NFTS = [
  {
    id: 1,
    title: "Cosmic Dreamer #1",
    image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=800&auto=format&fit=crop&q=60",
    price: "0.5 ETH",
    creator: "0x1234...5678"
  },
  {
    id: 2,
    title: "Digital Paradise #4",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    price: "0.8 ETH",
    creator: "0x8765...4321"
  },
  {
    id: 3,
    title: "Abstract Realm #7",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698b98d?w=800&auto=format&fit=crop&q=60",
    price: "1.2 ETH",
    creator: "0x2468...1357"
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Discover, Collect, and Sell <br /> Extraordinary NFTs
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore the best digital art and collect unique NFTs from talented creators around the world
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/explore">Explore Collection</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/create">Create NFT</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured NFTs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured NFTs</h2>
            <Button variant="ghost" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_NFTS.map((nft) => (
              <Card key={nft.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={nft.image}
                    alt={nft.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{nft.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Creator: {nft.creator}
                      </span>
                      <span className="font-medium">{nft.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}