// @ts-check
const express = require('express')
/** @type {import('next').default}*/
// @ts-ignore
const next = require('next')
const { parse } = require('url')

const dev = false

const app = express()

const nextApp = next({ dev })

const nextHandler = nextApp.getRequestHandler()

const handler = async (req, res, next) => {
  try {
    const parsedUrl = parse(req.originalUrl, true)
    await nextHandler(req, res, parsedUrl)
  } catch (err) {
    // this never happens btw
    next(err)
  }
}

nextApp.prepare().then(() => {
  app.get('/foo', handler)

  if (dev) {
    app.use('/_next/', handler)
  }

  app.use((req, res) => res.sendStatus(404))


  app.listen(3000, () => {
    console.log('ready on http://localhost:3000')
  })
})