const { exec } = require("child_process");

const fileName = process.argv[2];

if (!fileName) {
    console.error("Debe especificar el nombre del archivo a ejecutar");
    process.exit(1);
}

const fileNameWithExtension = fileName.endsWith(".ts") ? fileName : `${fileName}.ts`;

const command = `ts-node ${fileNameWithExtension}`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Stdout: \n\n${stdout}`);
});
