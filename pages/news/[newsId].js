// our-domain.com/news/newsdetail

import { useRouter } from "next/router";

function DetailPage() {
  const route = useRouter()

  const newsId = route.query.newsId

  console.log(newsId);

  // send a request to the backend API
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
