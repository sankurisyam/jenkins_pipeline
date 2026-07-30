import app from "./app";
const { greet } = app;

if (greet("Syam") === "Hello Syam") {
    console.log("✅ Test Passed");
    process.exit(0);
} else {
    console.log("❌ Test Failed");
    process.exit(1);
}