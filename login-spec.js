const simulator = require("miniprogram-automator");

(async () => {


    const miniApp = await simulator.launch({
        projectPath: `${__dirname}/test_app/`
    });


    // Get the current page for next actions
    let page = await miniApp.currentPage();


    //close the mini app 
    await miniApp.close();


}
)();