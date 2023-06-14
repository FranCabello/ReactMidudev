const apiKey = "5zxgW2e35TmNqjI3RX8f5X6RJKyyARf0"

export default function getGifs({ keyword = "morty" } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const {data = []} = response
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const {images, title, id} = image
          const { url } = images.fixed_width
          return { title, id, url }
        })
        return gifs
      }
    })
}