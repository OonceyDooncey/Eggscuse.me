import { supabase } from '../dbAuth/supabase'

interface ExcuseObject {
  status: number,
  data: string,
  message: string
}

export default defineEventHandler(async (event) => {
  const category = getQuery(event).category

  let data: string[] = []
  
  let { data: Excuses, error } = await supabase
    .from('Excuses')
    .select("*")
    .eq('category', category)
  // .order('random()')
  // .limit(1);

  if (error) {
    console.error('Error fetching data:', error)
    return {
      status: 500,
      data: '',
      message: 'Error fetching data'
    }
  }

  if (!Excuses) {
    return {
      status: 404,
      data: '',
      message: 'No data found'
    }
  }
  
  data = Excuses.map(excuse => excuse.excuse)

  const excuse = data[Math.floor(Math.random() * data.length)]
  const response: ExcuseObject = {
    status: 200,
    data: excuse,
    message: 'success'
  }
  return response
})
