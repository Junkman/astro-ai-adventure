import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const guideSource = "src/AI-Adventure-Guide.md";
const adventureSourceDir = "src/content/adventures";

const publicDir = "public";
const publicAdventureDir = join(publicDir, "adventures");

async function ensureDirectories() {
  await mkdir(publicAdventureDir, { recursive: true });
}

async function cleanGeneratedFiles() {
  await rm(join(publicDir, "AI-Adventure-Guide.md"), { force: true });
  await rm(join(publicDir, "AI-Adventure-Guide.txt"), { force: true });

  const files = await readdir(publicAdventureDir);

  for (const file of files) {
    if (file.endsWith(".aia.md") || file.endsWith(".aia.txt")) {
      await rm(join(publicAdventureDir, file), { force: true });
    }
  }
}

async function copyGuide() {
  const content = await readFile(guideSource, "utf8");

  await writeFile(
    join(publicDir, "AI-Adventure-Guide.md"),
    content,
    "utf8"
  );

  await writeFile(
    join(publicDir, "AI-Adventure-Guide.txt"),
    content,
    "utf8"
  );
}

async function copyAdventures() {
  const files = await readdir(adventureSourceDir);

  for (const file of files) {
    if (!file.endsWith(".aia.md")) {
      continue;
    }

    const sourcePath = join(adventureSourceDir, file);
    const content = await readFile(sourcePath, "utf8");

    const mdDestination = join(publicAdventureDir, file);
    const txtFilename = file.replace(/\.aia\.md$/, ".aia.txt");
    const txtDestination = join(publicAdventureDir, txtFilename);

    await writeFile(mdDestination, content, "utf8");
    await writeFile(txtDestination, content, "utf8");

    console.log(`Synced ${file}`);
  }
}

async function main() {
  await ensureDirectories();
  await cleanGeneratedFiles();
  await copyGuide();
  await copyAdventures();

  console.log("AI Adventure content synced.");
}

main().catch((error) => {
  console.error("Content sync failed:");
  console.error(error);
  process.exit(1);
});