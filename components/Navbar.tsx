"use client";

import { Wallet, Gem } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setConnected(true);
      } catch (error) {
        console.error("User rejected connection");
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Gem className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">NFT Market</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/explore" className="text-foreground/80 hover:text-foreground">
              Explore
            </Link>
            <Link href="/create" className="text-foreground/80 hover:text-foreground">
              Create
            </Link>
            <Button
              onClick={connectWallet}
              variant={connected ? "outline" : "default"}
              className="flex items-center space-x-2"
            >
              <Wallet className="h-4 w-4" />
              <span>{connected ? "Connected" : "Connect Wallet"}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}