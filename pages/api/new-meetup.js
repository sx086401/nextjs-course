import { connectClient } from './api/utils'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body

    const client = await connectClient()
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    const result = await meetupsCollection.insertOne(data)

    client.close()

    res.status(201).json({ message: 'Meetup inserted.' })
  }
}
