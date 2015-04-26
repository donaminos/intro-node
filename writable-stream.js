console.log("stdout is url writable?\n" + process.stdout.writable );

process.stdout.write("hello");
process.stdout.write("world\n");