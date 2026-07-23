interface WorkerRequest {
  randomData: string;
  difficulty: number;
  nonce: number;
  threads: number;
}

export {};

const encoder = new TextEncoder();

const hasLeadingZeroes = (bytes: Uint8Array, difficulty: number): boolean => {
  const completeBytes = Math.floor(difficulty / 2);
  for (let index = 0; index < completeBytes; index += 1) {
    if (bytes[index] !== 0) return false;
  }
  return difficulty % 2 === 0 || bytes[completeBytes] >> 4 === 0;
};

addEventListener("message", async ({ data }: MessageEvent<WorkerRequest>) => {
  let nonce = data.nonce;

  while (true) {
    const digest = await crypto.subtle.digest("SHA-256", encoder.encode(data.randomData + nonce));
    const digestBytes = new Uint8Array(digest);
    if (hasLeadingZeroes(digestBytes, data.difficulty)) {
      postMessage({ nonce, response: digestBytes.toHex() });
      return;
    }
    nonce += data.threads;
  }
});
