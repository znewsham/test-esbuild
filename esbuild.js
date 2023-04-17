import esbuild from 'esbuild';

const archName = 'web.browser';
const isProduction = false;
async function build() {
  const build = await esbuild.context({
    absWorkingDir: process.cwd(), // it doesn't seem like this shoudl be needed, but because the test-packages commands uses chdir it seems it is
    entryPoints: ['./test.ts'],
    outdir: './build',
    bundle: true,
  }).catch(e => console.error(e));

  await build.rebuild();
}

build().then(console.log).catch(console.error);
