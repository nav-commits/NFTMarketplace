import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const NFTS = [
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
  },
  {
    id: 4,
    title: "Digital Genesis",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60",
    price: "2.0 ETH",
    creator: "0x9876...5432"
  },
  {
    id: 5,
    title: "Neon Dreams",
    image: "https://images.unsplash.com/photo-1633537066008-1a51744c0f86?w=800&auto=format&fit=crop&q=60",
    price: "1.5 ETH",
    creator: "0x1357...2468"
  },
  {
    id: 6,
    title: "Virtual Horizons",
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&auto=format&fit=crop&q=60",
    price: "0.75 ETH",
    creator: "0x2468...9753"
  }
];

export default function Explore() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Explore NFTs</h1>
      
      <div className="flex gap-4 mb-8">
        <Input
          placeholder="Search NFTs..."
          className="max-w-sm"
        />
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="art">Art</SelectItem>
            <SelectItem value="music">Music</SelectItem>
            <SelectItem value="collectibles">Collectibles</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="recent">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Recently Added</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NFTS.map((nft) => (
          <Card key={nft.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
  );
}