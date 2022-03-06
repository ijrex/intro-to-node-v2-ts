#! /usr/bin/env node

import open from 'open'
import yargs from 'yargs'
import fetch from 'node-fetch'

type RedditData = {
    data: {
        children: Array<{
            data: {
                title: string
                permalink: string
            }
        }>
    }
}

const { argv } = yargs(process.argv)

const res = await fetch('https://reddit.com/.json')
const data = (await res.json()) as RedditData

const { children } = data.data
const { data: randomPost } =
    children[Math.floor(Math.random() * children.length)]
const link = `https://reddit.com${randomPost.permalink}`

if (argv.hasOwnProperty('print')) {
    console.log(`
        title: ${randomPost.title}
        link: ${link}
    `)
} else {
    open(link)
}
