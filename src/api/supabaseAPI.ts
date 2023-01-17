import { SiteCredentials } from '@/types/supabaseTypes';
import { createClient } from '@supabase/supabase-js';

export async function getSiteCredentials(): Promise<SiteCredentials[]> {
  const supbaseURL = process.env.supabase_URL === undefined 
    ? '' 
    : process.env.supabase_URL;
  const supbaseKEY = process.env.supabase_KEY === undefined 
    ? '' 
    : process.env.supabase_KEY;

  const supabase = createClient(
    supbaseURL,
    supbaseKEY
  );

  const { data, error } = await supabase
    .from('Credentials')
    .select('website, username, password')

  if (error) {
    console.log(error)
    return []
  }

  return data
}

// def initializeClient() -> Client:
//   load_dotenv()
//   url: str = os.getenv("SUPABASE_URL")
//   key: str = os.getenv("SUPABASE_KEY")
//   return create_client(url, key)

// def getSiteDetails(webName: str):
//   supabase: Client = initializeClient()

//   url = supabase.table("Website").select("url").eq("website", webName).execute().data[0]['url']
//   credentials = supabase.table("Credentials").select("username, password").eq("website", webName).execute().data[0]
  
//   return url, credentials['username'], credentials['password']

// def insertBetData(betInfo: str, betDate: str, betPrice: float, website: str):
//   supabase: Client = initializeClient()
//   supabase.table("Bet").insert([{
//     "information": betInfo, 
//     "bet_date": betDate,
//     "price": betPrice,
//     "website": website,
//   }]).execute()
