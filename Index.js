
const prompt = require('prompt');
const fs = require("fs");
const login = require("fca-unofficial");
const chalk = require("chalk")
prompt.start();

prompt.get(['targetID', 'message', 'message2', 'timer'], function (err, result) {
    if (err) { return onErr(err); }
    console.log(chalk.bold.hex("#00FF00").bold("targetID: ") + chalk.bold.hex("#00FF00").bold(result.targetID));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message: ") + chalk.bold.hex("#00FF00").bold(result.message));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message2: ") + chalk.bold.hex("#00FF00").bold(result.message2));
    console.log(chalk.bold.hex("#00FF00").bold("Send per ") + chalk.bold.hex("#00FF00").bold(`${result.timer} second`));
    login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
        if(err) return console.error(err);
        fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState(), null, '\x09'))
		setInterval(() => {
			api.sendMessage(result.message, result.targetID, () => {
                console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message}`));
                api.sendMessage(result.message2, result.targetID, () => {
                    console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message2}`));
                    
                        })
                    })               
                
		}, `${result.timer}000`);
	});
});

function onErr(err) {
    console.log(err);
    return 1;
}
process.on('unhandledRejection', (err, p) => {});


