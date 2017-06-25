import React from 'react'
import ChatBot from '../../../lib/index'

const Example = () => (
  <ChatBot
    botBubbleColor='#000'
    hideHeader='true'
    hideBotAvatar='true'
    hideUserAvatar='true'
    steps={[
      {
        id: '1',
        message: 'Hello human, welcome to Spectrum. 🙏',
        trigger: '2'
      },
      {
        id: '2',
        message: 'What would you like to call this video?',
        trigger: '3'
      },
      {
        id: '3',
        user: true,
        trigger: '4'
      },
      {
        id: '4',
        message: 'Okay. "{previousValue}" is a nice name!',
        trigger: '5'
      },
      {
        id: '5',
        message: 'What is the typo of this movie/video?',
        trigger: '6'
      },
      {
        id: '6',
        options: [
          { value: 1, label: 'Movie', trigger: '7' },
          { value: 2, label: 'Documentary', trigger: '7' },
          { value: 3, label: 'Short Film', trigger: '7' }
        ]
      },
      {
        id: '7',
        message: 'Choose tags to best describe this video/movie.',
        trigger: '8'
      },
      {
        id: '8',
        options: [
          { value: 1, label: 'Drama', trigger: '9' },
          { value: 2, label: 'Animation', trigger: '9' },
          { value: 3, label: 'Biography', trigger: '9' },
          { value: 4, label: 'Comedy', trigger: '9' }
        ],
        trigger: '9'
      },
      {
        id: '9',
        message: 'Do you want any more tags?',
        trigger: '10'
      },
      {
        id: '10',
        options: [
          { value: 1, label: 'Yes', trigger: '8' },
          { value: 2, label: 'No', trigger: '11' }
        ]
      },
      {
        id: '11',
        message: 'Set up Privacy',
        trigger: '12'
      },
      {
        id: '12',
        options: [
          { value: 1, label: 'Public', trigger: '13' },
          { value: 2, label: 'Private', trigger: '13' },
          { value: 3, label: 'Unlisted', trigger: '13' },
          { value: 4, label: 'Only me', trigger: '13' }
        ]
      },
      {
        id: '13',
        message: 'Monetization options',
        trigger: '14'
      },
      {
        id: '14',
        message: 'What is your price for this video/movie?',
        trigger: '15'
      },
      {
        id: '15',
        user: true,
        trigger: '16'
      },
      {
        id: '16',
        message: 'Looking good, lets publish this.',
        trigger: '17'
      },
      {
        id: '17',
        options: [
          { value: 1, label: 'Yes', trigger: '18' },
          { value: 2, label: 'No, restart', trigger: '1' }
        ]
      },
      {
        id: '18',
        message: 'Awesome, its live. 👏',
        trigger: '19'
      },
      {
        id: '19',
        component: (
          <video src='https://www.w3schools.com/html/mov_bbb.mp4' controls />
        ),
        end: true
      }
    ]}
  />
)

export default Example
