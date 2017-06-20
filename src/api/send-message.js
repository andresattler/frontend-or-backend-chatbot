import request from 'request'

const token = process.env.FB_PAGE_ACCESS_TOKEN

function sendTextMessage(recipientId) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: token },
    method: 'POST',
    json: {
      recipient: {
        id: recipientId,
      },
      message: {
        text: 'Hello World!',
      },
    },
  }, (error, response) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error('Error sending messages: ', error)
    } else if (response.body.error) {
      // eslint-disable-next-line no-console
      console.error('Error: ', response.body.error)
    }
  })
}

export default sendTextMessage
