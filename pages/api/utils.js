import { MongoClient } from 'mongodb'

export async function connectClient() {
  const client = await MongoClient.connect(
    'mongodb+srv://nextjs-tester:dR4bBu8MsAhKzXMi@cluster0.arpq7.mongodb.net/meetups?retryWrites=true&w=majority'
  )

  return client
}
