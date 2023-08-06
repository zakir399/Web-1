
const prompt = require('prompt');
const fs = require("fs");
const login = require("fca-unofficial");
const chalk = require("chalk")
prompt.start();
console.log(chalk.bold.hex("#00FF00").bold("\033[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\033[1;37m๑۩♡۩๑\033[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●"));

console.log(chalk.bold.hex("#00FF00").bold("\033[1;37mWELCOME TO CHAND COMMAND"));
    console.log(chalk.bold.hex("#00FF00").bold("                  \033[1;30m▉▉▉▉"));
    console.log(chalk.bold.hex("#00FF00").bold("                 \033[1;30m▂▉▉▉▉▂"));
    console.log(chalk.bold.hex("#00FF00").bold("                \033[1;33m╰▏ ┛┗ ▕╯"));
    console.log(chalk.bold.hex("#00FF00").bold("                 \033[1;33m╲ 👅 ╱"));
    console.log(chalk.bold.hex("#00FF00").bold("                 \033[1;32m╱▔╲╱▔╲"));
    console.log(chalk.bold.hex("#00FF00").bold("               \033[1;32m╱ ╱▏╭╮▕╲ ╲"));
    console.log(chalk.bold.hex("#00FF00").bold("               \033[1;32m╲ ╲▏╭╮▕╱ ╱       \033[1;31m╔═╗  ╔╦╗  ╔═╗"));
    console.log(chalk.bold.hex("#00FF00").bold("                 \033[1;35m╲▉▉▉▉╱         \033[1;36m╠═╣   ║   ╠╣"));
    console.log(chalk.bold.hex("#00FF00").bold("                  \033[1;34m▏╭╮▕          \033[1;32m╩ ╩   ╩   ╚  "));
    console.log(chalk.bold.hex("#00FF00").bold("                  \033[1;34m▏▏▕▕"));
    console.log(chalk.bold.hex("#00FF00").bold("                  \033[1;34m▏▏▕▕"));
    console.log(chalk.bold.hex("#00FF00").bold("                 \033[1;31m╭╰ ╮╭╰ ╮"));
    console.log(chalk.bold.hex("#00FF00").bold("               \033[1;34msᴜʙ \033[1;33mᴋᴀ \033[1;35mʙᴀᴀᴘ"));
    console.log(chalk.bold.hex("#00FF00").bold("\033[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\033[1;37m๑۩♡۩๑\033[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●"));
console.log(chalk.bold.hex("#00FF00").bold(" "));
    console.log(chalk.bold.hex("#00FF00").bold(" \033[1;31m.██████╗██╗  ██╗ █████╗ ███╗   ██╗██████╗ "));
    console.log(chalk.bold.hex("#00FF00").bold("\033[1;32m.██╔════╝██║  ██║██╔══██╗████╗  ██║██╔══██╗"));
    console.log(chalk.bold.hex("#00FF00").bold("\033[1;33m.██║     ███████║███████║██╔██╗ ██║██║  ██║"));
    console.log(chalk.bold.hex("#00FF00").bold("\033[1;34m.██║     ██╔══██║██╔══██║██║╚██╗██║██║  ██║"));
    console.log(chalk.bold.hex("#00FF00").bold("\033[1;35m.╚██████╗██║  ██║██║  ██║██║ ╚████║██████╔╝"));

console.log(chalk.bold.hex("#00FF00").bold(" \033[1;36m.╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ "));
    console.log(chalk.bold.hex("#00FF00").bold("\033[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\033[1;37m๑۩♡۩๑\033[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●"));
 

prompt.get(['targetID', 'message', 'message2', 'message3','message4','message5','timer'], function (err, result) {
    if (err) { return onErr(err); }
    console.log(chalk.bold.hex("#FF0000").bold("targetID : ") + chalk.bold.hex("#008000").bold(result.targetID));
    console.log(chalk.bold.hex("#0000FF").bold("Send to message: ") + chalk.bold.hex("#FF00FF").bold(result.message));
    console.log(chalk.bold.hex("#FFA500").bold("Send to message2: ") + chalk.bold.hex("#808000").bold(result.message2));
    console.log(chalk.bold.hex("#7FFFD4").bold("Send to message3: ") + chalk.bold.hex("#FFC0CB").bold(result.message3));
    console.log(chalk.bold.hex("#008000").bold("Send to message4: ") + chalk.bold.hex("#00FF00").bold(result.message4));
    console.log(chalk.bold.hex("#008000").bold("Send to message5: ") + chalk.bold.hex("#FFC0CB").bold(result.message5));
    console.log(chalk.bold.hex("#00FF00").bold("Send per ") + chalk.bold.hex("#00FF00").bold(`${result.timer} second`));
    login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
        if(err) return console.error(err);
        fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState(), null, '\x09'))
		setInterval(() => {
			api.sendMessage(result.message, result.targetID, () => {
                console.log(chalk.bold.hex("#00FF00").bold(`Successful Sent ${result.message}`));
                api.sendMessage(result.message2, result.targetID, () => {
                    console.log(chalk.bold.hex("#00FF00").bold(`Successful Sent ${result.message2}`));
                    api.sendMessage(result.message3, result.targetID, () => {
                        console.log(chalk.bold.hex("#00FF00").bold(`Successful Sent ${result.message3}`));
                        api.sendMessage(result.message4, result.targetID, () => {
                            console.log(chalk.bold.hex("#00FF00").bold(`Successful Sent ${result.message4}`));
                            api.sendMessage(result.message5, result.targetID, () => {
                                console.log(chalk.bold.hex("#00FF00").bold(`Successful Sent ${result.message5}`));
                            })
                        })
                    })
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


