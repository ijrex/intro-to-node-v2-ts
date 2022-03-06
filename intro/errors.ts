import { readFile } from 'fs'
import { readFile as readFileAsync } from 'fs/promises'

// callback error

readFile(
    new URL('./unknown-file.ts', import.meta.url),
    'utf-8',
    (err, data) => {
        if (err) {
            console.log(
                'Callback Error:\n',
                `Error from ${import.meta.url}\n`,
                err
            )
        } else {
            // handle successful response
            console.log(data)
        }
    }
)

// promise error

await readFileAsync(
    new URL('./unknown-file.ts', import.meta.url),
    'utf-8'
).catch((err) => {
    console.log('Promise Error:\n', `Error from ${import.meta.url}\n`, err)
})

// try catch error

try {
    await readFileAsync(new URL('./unknown-file.ts', import.meta.url), 'utf-8')
} catch (err) {
    console.log('Try/Catch Error:\n', `Error from ${import.meta.url}\n`, err)
}

// uncaught exception error

process.on('uncaughtException', (err) => {
    console.log(
        'Uncaught Exception Error:\n',
        `Error from ${import.meta.url}...\n`,
        err
    )
})

throw new Error()
