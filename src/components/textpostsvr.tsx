import { thoughts } from '@/types/types';
import { getThoughts } from '@/app/api';

export default async function ServerPosts() {
  const posts2 = await getThoughts();

  return (
    <div className='text-white gap-10'>
      
        {posts2?.map (data => 
          <pre key={data.id} className='border-b'>
              --{data.date}
              <pre key={data.id} className=''>
                  {data.text}
              </pre>
          </pre>
        )}
    </div>
  )
}
