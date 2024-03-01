import { supabase } from '../dbAuth/supabase'

interface ExcuseObject {
  status: number,
  data: string,
  message: string
}

const workData = [
  'I woke up feeling really sick today.',
  'My car broke down on the way to work.',
  'I have a family emergency to attend to.',
  'I had a severe headache and couldn\'t drive.',
  'My pet had a medical emergency.',
  'I had a plumbing issue at home that needed immediate attention.',
  'I accidentally overslept because I didn\'t set my alarm.',
  'I had to take care of a sick family member.',
  'I had an important appointment I couldn\'t reschedule.',
  'My child was sick and needed my care.',
  'I had a power outage in my neighborhood.',
  'I had a severe allergic reaction to something I ate.',
  'I had to deal with a personal crisis.',
  'I got locked out of my house and had to wait for a locksmith.',
  'I had to take my pet to the vet.',
  'My phone died overnight, and my alarm didn\'t go off.',
  'I had a bad case of food poisoning.',
  'I had to deal with a major household appliance breakdown.',
  'I was feeling extremely fatigued and couldn\'t get out of bed.',
  'There was a major public transportation issue that delayed me.'
]

const schoolData = [
  'I was late because I missed the bus',
  'I was late because I missed the train',
  'I was late because I missed the subway',
  'I was late because I missed the tram',
  'I was late because I missed the trolley',
  'I was late because I missed the ferry',
  'I was late because I missed the boat',
  'I was late because I missed the plane',
  'I was late because I missed the helicopter',
  'I was late because I missed the blimp',
  'I was late because I missed the airship',
  'I was late because I missed the air balloon',
  'I was late because I missed the hot air balloon',
  'I was late because I missed the glider',
  'I was late because I missed the hang glider',
  'I was late because I missed the paraglider',
  'I was late because I missed the ultralight',
  'I was late because I missed the autogyro',
  'I was late because I missed the gyrocopter',
  'I was late because I missed the autogiro',
  'I was late because I missed the autogyre',
  'I was late because I missed the autogire',
  'I was late because I missed the autogiroplane',
  'I was late because I missed the autogyroplane',
  'I was late because I missed the autogiro'
]

const socialData = [
  'I was late because I was at the doctor',
  'I was late because I was at the dentist',
  'I was late because I was at the hospital',
  'I was late because I was at the pharmacy',
  'I was late because I was at the bank',
  'I was late because I was at the post office',
  'I was late because I was at the grocery store',
  'I was late because I was at the supermarket',
  'I was late because I was at the convenience store',
  'I was late because I was at the gas station',
  'I was late because I was at the car wash',
  'I was late because I was at the auto repair shop',
  'I was late because I was at the mechanic',
  'I was late because I was at the tire shop',
  'I was late because I was at the oil change shop',
  'I was late because I was at the lube shop',
  'I was late because I was at the quick lube',
  'I was late because I was at the jiffy lube',
  'I was late because I was at the valvoline',
  'I was late because I was at the firestone',
  'I was late because I was at the goodyear',
  'I was late because'
]


export default defineEventHandler(async (event) => {
  // console.log(event)
  const category = getQuery(event).category
  // console.log(category)

  let data: string[] = []

  // if (category === 'work') {
  //   data = workData
  // }
  // if (category === 'school') {
  //   data = schoolData
  // }
  // if (category === 'social') {
  //   data = socialData
  // }



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
