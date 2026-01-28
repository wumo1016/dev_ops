import fs from 'fs'
import path from 'path'

export default function (req, res) {
  // res.status(200).send('你好，舞墨!')
  const dirs = fs.readdirSync(path.join(process.cwd(), '../../../'))
  res.status(200).send(dirs.join('\n'))
}

// console.log(fs.readdirSync(path.join(process.cwd(), '../../../')).join('\n'))
