const axios = require("axios");

const MODEL_API_URL = "https://api.example.com/generate-response";

const testData = [
  {
    input: "Explain JavaScript closures",
    expected: "Explanation of closures...",
  },
  { input: "What is the capital of France?", expected: "Paris" },
];

async function generateResponse(input) {
  const response = await axios.post(MODEL_API_URL, { prompt: input });
  return response.data.output;
}

async function evaluateAccuracy() {
  let correct = 0;
  for (const data of testData) {
    const output = await generateResponse(data.input);
    if (output === data.expected) {
      correct++;
    }
  }
  const accuracy = (correct / testData.length) * 100;
  console.log(`Model Accuracy: ${accuracy}%`);
}

// Metric 2: Response Time
async function evaluateResponseTime() {
  const responseTimes = [];
  for (const data of testData) {
    const start = Date.now();
    await generateResponse(data.input);
    const duration = Date.now() - start;
    responseTimes.push(duration);
  }
  const avgResponseTime =
    responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
  console.log(`Average Response Time: ${avgResponseTime}ms`);
}

// Run evaluations
(async () => {
  await evaluateAccuracy();
  await evaluateResponseTime();
})();
