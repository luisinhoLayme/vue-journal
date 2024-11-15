export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse beatae soluta eaque reprehenderit odio voluptas laborum dicta.',
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Esse beatae soluta eaque reprehenderit odio voluptas laborum dicta.',
      picture: null,
    },
    {
      id: new Date().getTime() + 3000,
      date: new Date().toDateString(),
      text: 'Esse beatae soluta  eaque reprehenderit odio voluptas eaque reprehenderit odio voluptas laborum dicta.',
      picture: null,
    },
  ]
})
