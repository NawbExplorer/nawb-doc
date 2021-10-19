var ghpages = require("gh-pages");
var { exec } = require("child_process");
var ora = require("ora");

async function publish() {
  return new Promise((resolve, reject) => {
    ghpages.publish(
      "build",
      {
        branch: "master",
        repo: "https://github.com/Nawbc/nawb-doc.git",
        message: "Auto-generated commit",
        user: {
          name: "Nawbc",
          email: "wanghan9423@outlook.com",
        },
      },
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

async function buildDemo() {
  await new Promise((resolve, reject) => {
    exec("npm run build", (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

(async function name() {
  const spinner = ora("building docs...").start();
  await buildDemo();
  spinner.stop();
  spinner.clear();
  console.log("build Success");
  spinner.start("deploying docs...");
  await publish().catch((err) => {
    console.error("Error:", err);
  });
  spinner.stop();
  spinner.clear();
  console.log("deploy Success");
})();
