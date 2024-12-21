interface Window {
  ethereum?: {
    request: (args: { method: string }) => Promise<string[]>;
    selectedAddress: string | null;
  };
}