// Fails the build if the published Cast receiver differs from its source.
// The receiver at /receiver/ is live on every user's TV — the site build must
// never transform it.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const source = "public/receiver";
const built = "dist/receiver";

function files(dir, prefix = "") {
    return readdirSync(dir).flatMap((name) => {
        const path = join(dir, name);
        return statSync(path).isDirectory() ? files(path, join(prefix, name)) : [join(prefix, name)];
    });
}

const expected = files(source).sort();
const actual = files(built).sort();
if (expected.join("\n") !== actual.join("\n")) {
    console.error("Receiver file list differs:", { expected, actual });
    process.exit(1);
}
for (const file of expected) {
    if (!readFileSync(join(source, file)).equals(readFileSync(join(built, file)))) {
        console.error(`Receiver file changed by the build: ${file}`);
        process.exit(1);
    }
}
console.log(`Receiver check passed (${expected.length} files identical).`);
