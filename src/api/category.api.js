class CategoryApi {
  _apiUrl = "https://opentdb.com/api_category.php"

  async fetchCategories(){
    const response = await fetch(this._apiUrl)
    return (await response.json())['trivia_categories']
  }
}

export const categoryApi = new CategoryApi()
export default categoryApi
