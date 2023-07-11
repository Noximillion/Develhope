import * as fs from "node:fs";

fs.writeFile('ciaone.txt', 'ciao', (err) => {
    if(err) {
        console.log(`something went wrong`)
    }
})
