/**
 * ============================================================================
 * ALBUMS CATALOG
 * ============================================================================
 * Every album that can be featured on an article lives here. Each article
 * references an album by its `id` (see config/articles.ts), so you can swap the
 * album promoted on any page just by changing that id — no page code changes.
 *
 * TO ADD A NEW ALBUM:
 *   1. Copy an existing entry.
 *   2. Give it a unique `id` (lowercase, dashes).
 *   3. Paste the cover image URL and the streaming links you have.
 *      Any link you leave out or set to "" simply won't render.
 * ----------------------------------------------------------------------------
 */

export type StreamingLinks = {
  spotify?: string
  appleMusic?: string
  amazonMusic?: string
  youtube?: string
  youtubeMusic?: string
}

export type Album = {
  id: string
  title: string
  artist: string
  /** Album cover art (square). External URLs are fine. */
  cover: string
  links: StreamingLinks
}

export const albums: Album[] = [
  {
    id: "ancient-arrow",
    title: "Ancient Arrow",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/-buJ5AM_z6sq53DW73Y-XY8rvnVezl3oorCQ44zA7nyDLETHSclo-aIG-VaQMOOCpE7JI4iLUBLdYY_E=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/0Gq051xtjnppiz3TP3B72h",
      appleMusic: "https://music.apple.com/us/album/ancient-arrow/1860594687",
      amazonMusic: "https://music.amazon.com/albums/B0G6FZ96MF",
      youtube:
        "https://www.youtube.com/watch?v=lkL6GSwpW-g&list=OLAK5uy_nf2AyKOahV8cHdVF4AcOxjRkq5VwvCPig",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_kskV8dhXP35PTwXlOEQRHRdebp4K1nurc",
    },
  },
  {
    id: "deep-whistle",
    title: "Deep Whistle",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/gExVnnEzYhtlNVY-2FMwzGAxaOv126g2ZF8-L1SZ7dIxUaEJ_NrOu8DrRNBkCPEZStMDNRQtNO62LR0Q=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/7xd6wDNgnOY2S4fiXlJdrI",
      appleMusic: "https://music.apple.com/us/album/deep-whistle/6767366299",
      amazonMusic: "https://music.amazon.com/albums/B0GZLZJ52K",
      youtube:
        "https://www.youtube.com/watch?v=TOa1ZJ24IHA&list=OLAK5uy_mpzxZ2LpHak3k_hgU6lYMh2bUxsQK_eic",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_kOP-LOoepLxpxuVLMRg824FImu-CYWByY",
    },
  },
  {
    id: "reflection-symphony",
    title: "Reflection Symphony",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/WeE91rRyH-mHr0CsR2CkOt8z_11jQ6hf1rcj28DU-sr_Sazc51dLyWMta-AFKH4ZN_TYa4W8rgmIQlE=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/0dGL2OYR0K4p4XlN1uLbmz",
      appleMusic:
        "https://music.apple.com/us/album/reflection-symphony/6766624129",
      amazonMusic: "https://music.amazon.com/albums/B0GZF5F3K6",
      youtube:
        "https://www.youtube.com/watch?v=lUa8y98IdSM&list=OLAK5uy_kTq8-dqnQgiO4T_T_XVfNkZaQGWkq8h4U",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_kDDq4mZK_gHk5pVtvw4er3Ht2MoSBObqk",
    },
  },
  {
    id: "heart-dimension",
    title: "Heart Dimension",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/lo4N5oFQ4g1PBNJoZZcl_tleUJrFFVwwY0_k5lDDcU_-q-fw2Y0KFCGJnB_ot0dMYJnIFHlTO8aNhqZ0Ow=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/2srKfqDMJRAFlEJyOleqcX",
      appleMusic:
        "https://music.apple.com/us/album/heart-dimension/1861509838",
      amazonMusic: "https://music.amazon.com/albums/B0G72H41JP",
      youtube:
        "https://www.youtube.com/watch?v=Ppx2wZp1Mvw&list=OLAK5uy_kkpfmLtGNE3NbpceM4zZjuz1fncnojyg8",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_nBaqHglGdtrugEZpRBCIThOsFJJIzdQ-E",
    },
  },
  {
    id: "far-road",
    title: "Far Road",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/wKDOke67vkOrQX5egeS7J709MizIrTdgAD9ZMSpLlbDkTqdOuu6kGvBbZHj5QU2_4xzunmR7qhJ4_Xo6=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/49Ewh7p4b7jU7b2ZmKWEHi",
      appleMusic: "https://music.apple.com/us/album/far-road/1865135386",
      amazonMusic: "https://music.amazon.com/albums/B0GD19Z2PR",
      youtube:
        "https://www.youtube.com/watch?v=Bcrw_C0L0x8&list=OLAK5uy_kCiwEfEb1dTaoUaL1-1S2_FOeB0ZPJRpQ",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_nWJfP73q_yjUYP5dUIOoxhVCXlyGrPCgk",
    },
  },
  {
    id: "trust-the-flow",
    title: "Trust The Flow",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/rbk0oEVC0Wr3U1c5WyURsU6wCmZglukIlX1VSJ_jddqfKGuGyYLHFxTbcu42Of7g-n1sCPL8HNe25gUr=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/4lCQQqaXLyqvqOnWMeRDbU",
      appleMusic: "https://music.apple.com/us/album/trust-the-flow/1861255566",
      amazonMusic: "https://music.amazon.com/albums/B0G6WWJ6JM",
      youtube:
        "https://www.youtube.com/watch?v=UctkGE1uww0&list=OLAK5uy_n92TGz1z_oALUKOWZkaMOOcuBlG30shgg",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_kb2UZYy90478_ukJnVuX9mQEPBXS7wZ9c",
    },
  },
  {
    id: "skyline-mirror",
    title: "Skyline Mirror",
    artist: "Dmiles",
    cover:
      "https://m.media-amazon.com/images/I/51HgcfM3sHL._UX716_FMwebp_QL85_.jpg",
    links: {
      spotify: "https://open.spotify.com/album/2hu32gsLRFgzy9vHUzFgPA",
      appleMusic: "https://music.apple.com/us/album/skyline-mirror/1885112232",
      amazonMusic: "https://music.amazon.com/albums/B0GSH2J258",
      youtube:
        "https://www.youtube.com/watch?v=STPcCkwUJzc&list=PLnP5lt6VXcBlCnJ_xMBkAsFnwKuBxcR8c",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=PLnP5lt6VXcBlCnJ_xMBkAsFnwKuBxcR8c",
    },
  },
  {
    id: "midnight-hammer",
    title: "Midnight Hammer",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/3qVxqkhti9_8WM_d1eCVePNlFyDsVqqzEs_FNml0tfOeBBB3YKw1UbQKdbEU-o4fYmIMatWtWUI-Qphe=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/1HmimthJYORJqWbHKjpmai",
      appleMusic:
        "https://music.apple.com/us/album/midnight-hammer/1855456039",
      amazonMusic: "https://music.amazon.com/albums/B0G37KCHH4",
      youtube:
        "https://www.youtube.com/watch?v=VS_RP-CH5w8&list=OLAK5uy_mCSdvBLIYHUWot2He89vpVwhteAumWNLs",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_kx2j8-b1pGV1-eAG6vhq3zjukELkNbuZw",
    },
  },
  {
    id: "future-arrow",
    title: "Future Arrow",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/aTabuCrVycHsTYg4jTwn85-WN0vPmGEKUJE5m6rni9uOXeB9cHr25Q5veRItT_4gmCLLQKlukCRv99AU=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/6D14WoJJ5CD0K02ZbnTVSV",
      appleMusic: "https://music.apple.com/us/album/future-arrow/1852174951",
      amazonMusic: "https://music.amazon.com/albums/B0G169WQ7G",
      youtube:
        "https://www.youtube.com/watch?v=ugs_KaMzfcU&list=OLAK5uy_mYTYtBfwLaL4ZDXQDB0B5ifADuKjAoGuI",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_myVhT1OMTsSnVGjgxvFOFNFn6w8fwU4SA",
    },
  },
  {
    id: "robokan",
    title: "Robokan",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/e_ln6V-ayKo4j3MMg8InolEuVz9uLPEx5wRrFgZ-CswN_lu891o5eYrJ__JJFg3_1yG1TIEAp1SCQ9QI=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/1SFjTjfQHxzX6APoF1xYXr",
      appleMusic: "https://music.apple.com/us/album/robokan/1853088314",
      amazonMusic: "https://music.amazon.com/albums/B0G1LFJBSV",
      youtube:
        "https://www.youtube.com/watch?v=E7c5PR8zf2M&list=OLAK5uy_mx1_FlbWuuPh-chklgKCVrf4bbpREArK8",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_m7nlmAY35hn9dx_KqniS-Arvg1tw27bNk",
    },
  },
  {
    id: "beme-2",
    title: "BeMe2",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/94s7tUDZRGLeApuocd22fG3YWTt6ZZIse0AuwFBFTt6J7Q2qyrGbSE0Fep3XDlPlO_P8iD_vXN9Ca6y_=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/6anpMseiBaaKz6zcpHpehZ",
      appleMusic: "https://music.apple.com/us/album/beme-2/6768241559",
      amazonMusic: "https://music.amazon.com/albums/B0H19VYK3M",
      youtube:
        "https://www.youtube.com/watch?v=m7m5gGn6y1E&list=OLAK5uy_l0Sev2vpxaPO9qGSWoK_JCx7s6_Q0L0TI",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_mRZPF3wAoKMvoEnhkyNEYhAzJr0rAE7Us",
    },
  },
  {
    id: "beme",
    title: "BeMe",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/dbfdSrTKBbVBJftmLYe6BPHELSpmvsBAc3THaX9PEKe3tLQMCaLWYqcXc_6eEsspJZ_66hQua0V6MH8N=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/5C7noVyauBdQjKS06O01NV",
      appleMusic: "https://music.apple.com/us/album/beme/6768007546",
      amazonMusic: "https://music.amazon.com/albums/B0H161ZWLL",
      youtube:
        "https://www.youtube.com/watch?v=kJ8NJp-qEZc&list=OLAK5uy_lsvXfErg3ZMScEaBLpp3641iKaIiZatVc",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_m4MnntfFCow6sLnRvvn7rxa_vKy_32J30",
    },
  },
  {
    id: "direct-potion",
    title: "Direct Potion",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/INpZ_Nz9owX-e5TjFEyqKiUmyajVPwnNdDT2HP0BewiKoMMCIv3AguGURG_936VdFMBdc45iBzpqry0=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/0MPduU4Tf8CHqSEcnseLjY",
      appleMusic: "https://music.apple.com/us/album/direct-potion/6765829061",
      amazonMusic: "https://music.amazon.com/albums/B0GZB297XN",
      youtube:
        "https://www.youtube.com/watch?v=qyz0VAsD-Rk&list=OLAK5uy_l0wjz4Fd6iM6cljVltuh8O0XhK_Cugwr4",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_mZ1MacqT7AzVLFWro6THntruqXeLZFW4k",
    },
  },
  {
    id: "just-dmiles-3",
    title: "Just Dmiles 3",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/BFUw8reRM-QLIGVYNkSIZsF4VN9QRmKgu2xT69LIJtGdsdqpRkl-AGzpALDwTNF1l7IK2KfAr06-BRI=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/74VT3U9SPElBTuMNrmcLuM",
      appleMusic: "https://music.apple.com/us/album/just-dmiles-3/1894261063",
      amazonMusic: "https://music.amazon.com/albums/B0GXGKR236",
      youtube:
        "https://www.youtube.com/watch?v=NRsgEZUPEKI&list=OLAK5uy_mOczJZjdTPiB2pbd9EXSyhItXmZHuGs3I",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_kG9OyEXJDWl7pbu063nQrIEz9tea_thSI",
    },
  },
  {
    id: "just-dmiles-2",
    title: "Just Dmiles 2",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/qV1aXOfOxGxGilHH9W_rnOMDCWXHIrMvLK8oEAHsfv778Hmhw_RNx-wtcJSDqP8GiLcJ2J9aJ2rSFPYW=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/6aiMQRrarNjfv6Wr0K31yh",
      appleMusic: "https://music.apple.com/us/album/just-dmiles-2/1891186243",
      amazonMusic: "https://music.amazon.com/albums/B0GW7SFR19",
      youtube:
        "https://www.youtube.com/watch?v=msPc99Ebdss&list=OLAK5uy_nGXrDyTcH8ponXQczWUpGWlD8DIM7CB3A",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_k5d3PnOlgtNuYK4a2wcAF7m1pD_S0olLs",
    },
  },
  {
    id: "just-dmiles",
    title: "Just Dmiles",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/ReztyywAdPIp5DbOpw_w85iONzgi4RqHrv2Z4fbH4LdtMf2qSDnKvOoEMaUbPFLtFsCVchiiT7LCGMPoKw=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/7b5ctcoqm65fo1UM9TFPaV",
      appleMusic: "https://music.apple.com/us/album/just-dmiles/1889669244",
      amazonMusic: "https://music.amazon.com/albums/B0GVG1NYNG",
      youtube:
        "https://www.youtube.com/watch?v=N0L2R7h4HDU&list=OLAK5uy_l4POcD9euV63rtKgRtfag6hlf8hBhd7H8",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_mTdbUh2qnMBm3jzNEXqzPz3ZBkgH8SwHc",
    },
  },
  {
    id: "abducted-2",
    title: "Abducted 2",
    artist: "Dmiles",
    cover:
      "https://m.media-amazon.com/images/I/51cJfo5HOEL._UX716_FMwebp_QL85_.jpg",
    links: {
      spotify: "https://open.spotify.com/album/2thPj7CCBqQ4VkWLvNAxjd",
      appleMusic: "https://music.apple.com/us/album/abducted-2/1886281698",
      amazonMusic: "https://music.amazon.com/albums/B0GSXLDJQ2",
      youtube:
        "https://www.youtube.com/watch?v=OlyJmFolVok&list=PLnP5lt6VXcBmkY8fD7Q-v7ChFlttV7iqN",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=PLnP5lt6VXcBmkY8fD7Q-v7ChFlttV7iqN",
    },
  },
  {
    id: "giro-fatal",
    title: "Giro Fatal",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/ci5hAbYYtr44Lyg3-pHZJgsFv1tOlS3dqJaWPZzcGUxrHizlLd0WJl-WkM-uV1jGeQPv97MSrVXjeQs=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/3wY1NSR8KXU3ctlSypDFzW",
      appleMusic: "https://music.apple.com/us/album/giro-fatal/1884024631",
      amazonMusic: "https://music.amazon.com/albums/B0GS3BRFJ9",
      youtube:
        "https://www.youtube.com/watch?v=D0tDs4wQcV4&list=OLAK5uy_lqafuEeDs60UvV-U-zXN42Ql7v7FFtwXg",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_kKACsd18IDdM71OwfZU3TngeBo-RNN37E",
    },
  },
  {
    id: "want-you",
    title: "Want You",
    artist: "Dmiles",
    cover:
      "https://m.media-amazon.com/images/I/4131LJVO5DL._UX716_FMwebp_QL85_.jpg",
    links: {
      spotify: "https://open.spotify.com/album/5go4smzFsSAAnJtPbJcGMG",
      appleMusic: "https://music.apple.com/us/album/want-you/1882877611",
      amazonMusic: "https://music.amazon.com/albums/B0GRCLWYFG",
      youtube:
        "https://www.youtube.com/watch?v=p7EGaZSrR10&list=PLnP5lt6VXcBn4zbJCEOMrx09Dy2yoKH5w",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=PLnP5lt6VXcBn4zbJCEOMrx09Dy2yoKH5w",
    },
  },
  {
    id: "wise-pop",
    title: "Wise Pop",
    artist: "Dmiles",
    cover:
      "https://m.media-amazon.com/images/I/51Ai-Ykk87L._UX716_FMwebp_QL85_.jpg",
    links: {
      spotify: "https://open.spotify.com/album/6a1I45izcicGCO3ZlPgL5w",
      appleMusic: "https://music.apple.com/us/album/wise-pop/1865078669",
      amazonMusic: "https://music.amazon.com/albums/B0GD19GSCX",
      youtube:
        "https://www.youtube.com/watch?v=XFaAH0-9gR0&list=PLnP5lt6VXcBn9YY3Fijok2OQzc53Y11L8",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=PLnP5lt6VXcBn9YY3Fijok2OQzc53Y11L8",
    },
  },
  {
    id: "the-lost-band",
    title: "The Lost Band",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/ULALhUxOwkVUQQ01QDF49nXOxP9DIXR-fahohDLSqFgUaCSYPWTlOTaLUF0P522qS3Npimp0u9Q9Dh8=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/1vvpUZzUyRIz1eMvWDj3cw",
      appleMusic: "https://music.apple.com/us/album/the-lost-band/1865125106",
      amazonMusic: "https://music.amazon.com/albums/B0GD1C8RZW",
      youtube:
        "https://www.youtube.com/watch?v=SJIuX04kcs8&list=OLAK5uy_l7HebedRRZUHra_1J1zz4EcPjg4usKbD8",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_kFTZHaJr_jtMi9fLb98sXI9Q8bI2uwxTU",
    },
  },
  {
    id: "soul-spark",
    title: "Soul Spark",
    artist: "Dmiles",
    cover:
      "https://m.media-amazon.com/images/I/518nHRjym5L._UX716_FMwebp_QL85_.jpg",
    links: {
      spotify: "https://open.spotify.com/album/0QGT4Kma7JWSOPx2KdR3Dl",
      appleMusic: "https://music.apple.com/us/album/soul-spark/1865131222",
      amazonMusic: "https://music.amazon.com/albums/B0GD1K37KV",
      youtube:
        "https://www.youtube.com/watch?v=RzZnUq5wK2Y&list=PLnP5lt6VXcBlpAJPYq1EWB-28e7lMiJGk",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=PLnP5lt6VXcBlpAJPYq1EWB-28e7lMiJGk",
    },
  },
  {
    id: "ivory-beats",
    title: "Ivory Beats",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/2WarCMSH0nAgOb2XolgtS5KSJoiG7KknV_67UNSxUem30iWN1OezjZ55iKeqkdJfvMuQFF612Ra_0YWM=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/0OfaJOeqmNaODIafHzFF6g",
      appleMusic: "https://music.apple.com/us/album/ivory-beats/1865135882",
      amazonMusic: "https://music.amazon.com/albums/B0GD1BGMYK",
      youtube:
        "https://www.youtube.com/watch?v=sUy7QReM97c&list=OLAK5uy_l9vs5Tm4vZ_QlEAOUgoIxCb_m8PIW6p-U",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_khzOEdvM11jiYnZbkWg4d95fyOPVP51pE",
    },
  },
  {
    id: "abducted",
    title: "Abducted",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/HapoTJi8Ken6yPykVMJaJOYb1cCi39F0zG9HYbeOwWKQhP-qy6Vk2UBRXNQtYCFqImyJ4QtCFF167sKCpg=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/0j6iEYnsd53U4eVx6BNP86",
      appleMusic: "https://music.apple.com/us/album/abducted/1861297253",
      amazonMusic: "https://music.amazon.com/albums/B0G6X1HZM6",
      youtube:
        "https://www.youtube.com/watch?v=L-AQ6Ivcw8Q&list=OLAK5uy_lza6VcKuLf6y6B7OzhcyDcmCrqWKHh0nI",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_mGurzhAzSwMnN4lZae-FG1rakBu3uwPEo",
    },
  },
  {
    id: "the-formula",
    title: "The Formula",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/Yk_HymifOvlT_TlvlNinThg8sQ7b042xJ8RzcFXA-53sY8qVwvqtvyt1Y6ZHDO2ZmchKroG9dP-kPHETnQ=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/42QH5lPc20smtCEZhws0cX",
      appleMusic: "https://music.apple.com/us/album/the-formula/1857186780",
      amazonMusic: "https://music.amazon.com/albums/B0G4GQBCY3",
      youtube:
        "https://www.youtube.com/watch?v=KSVA9-YjZ_k&list=OLAK5uy_lRkCoXUpt28nHtDgbUp9WoO_d3B9gkXHA",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_npPpgMe39Xfwyb1Lgsaovst-1oYw09CBI",
    },
  },
  {
    id: "shiny-star",
    title: "Shiny Star",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/FNo731pP7dx0xaa1Wuk5fmYMG7VjVlZEpE0Um0SBYAapMgFedcdt4RjrvuDhnjcaIxoeXpMdD3ubCErV=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/3tz4i6Al62QvCwq7hSzZWy",
      appleMusic: "https://music.apple.com/us/album/shiny-star/1854526822",
      amazonMusic: "https://music.amazon.com/albums/B0G2HSM2QL",
      youtube:
        "https://www.youtube.com/watch?v=uhDRLkLNfp4&list=OLAK5uy_k0XzoqmvjchkBpYZOzvz3AM5UjDcazyRU",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_m3pnpPc-mXcKnyl47ERl3OUf4_XG6jbTw",
    },
  },
  {
    id: "time-to-shine",
    title: "Time To Shine",
    artist: "Dmiles",
    cover:
      "https://yt3.googleusercontent.com/mKWwghWul_xOqiCa6ZnKen3UpTRRQzQiomnJTemzfCzzpTtFHGTon-egxXaBkxaGCdlQwrvZ9szxOtBx=w544-h544-l90-rj",
    links: {
      spotify: "https://open.spotify.com/album/7HPkO1o2bhGI3EwjyUAR7H",
      appleMusic: "https://music.apple.com/us/album/time-to-shine/1851064233",
      amazonMusic: "https://music.amazon.com/albums/B0FZ7J36HR",
      youtube:
        "https://www.youtube.com/watch?v=GwzNSOvP1YQ&list=OLAK5uy_mjJesD6AGKF2fjxCzMXSlxlpFe5KtlDDg",
      youtubeMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_lOKlCePSS_uZcczCpUSsQ_sdeXGgohjXA",
    },
  },
]

/** Look up a single album by id. Returns undefined if not found. */
export function getAlbumById(id: string): Album | undefined {
  return albums.find((album) => album.id === id)
}
