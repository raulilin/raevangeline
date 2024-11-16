import { thoughts } from '@/types/thoughts';
import { getThoughts } from '@/app/api';

export default async function ServerPosts() {
  const posts2 = await getThoughts();

  return (
    <div className='text-white'>
        {posts2?.map (data => 
            <pre key={data.id} className='border-b'>
                {data.text}
            </pre>
        )}
    </div>
  )
}
