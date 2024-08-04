import { HeroSection } from "@/components/custom/HeroSection";
import { Button } from "@/components/ui/button"
import { flattenAttributes } from "@/lib/utils";
import qs from 'qs';

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      populate:{
        image: {
          fields: ["url", "alternativeText"]
        },
        link: {
          populate: true
        }
      }
    }
  }  
})

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;
  
  try {
    const response = await fetch(url.href, { cache: 'no-store' });
    const data = await response.json();

    const flattenedData = flattenAttributes(data)
    console.dir(flattenedData, { depth: null })
    return flattenedData;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page")
  
  const { title, description, blocks } = strapiData;

  return (
    <main className="container mx-auto py-6">
      <HeroSection data={blocks[0]} />
    </main>
  )
}
