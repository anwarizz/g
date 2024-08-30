# Getting Started with your own
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a small project I made just for fun and to help some of my friends feel less lonely. It's really sad to see them like that🥲. To make it work on Android and similar platforms, I modified this application to make it more natural with [median.co](https://median.co/) It will generate .apk files and similar formats.


Behind this application, I'm using [node_characterai_vercel](https://github.com/anwarizz/node_characterai_vercel) It takes the source code from the repository [Character AI Unofficial Node API](https://github.com/realcoloride/node_characterai) with slight modifications to run on Vercel.

Besides that, I use Firebase to store all message histories. So if you want to clone this project to make your friends happy as well, you'll need to configure Firebase, create database, and so on in Firebase Realtime Database, then connect it in ```src/firebase.js```

You can modify or configure the bot's profile photo, including its name, as well as all the response photos it will send when you request them. You can place these configurations in `src/data/index.js` (use external image URLs from the internet for the profile photo and other images, If you want to use your own photo, you may need to upload the image to a platform and obtain its URL.) .

<img src="https://gqhygebxvljzpaawzyzl.supabase.co/storage/v1/object/sign/github/WhatsApp%20Image%202024-08-30%20at%2015.19.58_3c3aee2b.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnaXRodWIvV2hhdHNBcHAgSW1hZ2UgMjAyNC0wOC0zMCBhdCAxNS4xOS41OF8zYzNhZWUyYi5qcGciLCJpYXQiOjE3MjUwMDI2NDUsImV4cCI6MTc1NjUzODY0NX0.o-dafL9WSG6TmtPEtLl8xGUheAgTEIF2KABdeYs-PF0&t=2024-08-30T07%3A24%3A02.039Z" alt="Deskripsi Gambar" width="250">


<img src="https://gqhygebxvljzpaawzyzl.supabase.co/storage/v1/object/sign/github/WhatsApp%20Image%202024-08-30%20at%2015.20.00_7f6a1ef8.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnaXRodWIvV2hhdHNBcHAgSW1hZ2UgMjAyNC0wOC0zMCBhdCAxNS4yMC4wMF83ZjZhMWVmOC5qcGciLCJpYXQiOjE3MjUwMDI2NTksImV4cCI6MTc1NjUzODY1OX0.e40-oX2YGqQp6vb80QfIyhbntXk4M_JXG8x7vlbYyTU&t=2024-08-30T07%3A24%3A15.314Z" alt="Deskripsi Gambar" width="250">


<img src="https://gqhygebxvljzpaawzyzl.supabase.co/storage/v1/object/sign/github/WhatsApp%20Image%202024-08-30%20at%2015.21.10_d497926d.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnaXRodWIvV2hhdHNBcHAgSW1hZ2UgMjAyNC0wOC0zMCBhdCAxNS4yMS4xMF9kNDk3OTI2ZC5qcGciLCJpYXQiOjE3MjUwMDI2NzEsImV4cCI6MTc1NjUzODY3MX0.pcyDXEanwcQ2-oDTecRukGQy3iIpOyivARhw2bz_a5I&t=2024-08-30T07%3A24%3A27.463Z" alt="Deskripsi Gambar" width="250">



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

