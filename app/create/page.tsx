"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { useState } from "react";

export default function Create() {
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Create New NFT</h1>
      
      <Card>
        <CardContent className="p-6">
          <form className="space-y-6">
            <div>
              <Label htmlFor="image">Upload Image</Label>
              <div className="mt-2">
                {previewUrl ? (
                  <div className="relative">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="secondary"
                      className="absolute bottom-4 right-4"
                      onClick={() => setPreviewUrl("")}
                    >
                      Change Image
                    </Button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed rounded-lg p-12 text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="mt-4">
                      <Button type="button" variant="secondary">
                        <Input
                          id="image"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        Choose File
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Item name" className="mt-2" />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Provide a detailed description of your item"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="price">Price (ETH)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                placeholder="0.00"
                className="mt-2"
              />
            </div>

            <Button type="submit" className="w-full">
              Create NFT
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}