// ls

export async function tree(params: string): Promise<string[]> {
  const items = [];
  for await (const i of Deno.readDir(params)) {
    items.push(i.name);
  }
  return items;
}

const files = await tree(Deno.args[0]);
console.log(files);

// deno -R main.ts .   (--read-file)
