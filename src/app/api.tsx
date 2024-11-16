'use server'

import { thoughts } from '@/types/thoughts';
import { createClient } from '@/utils/supabase/server';

export async function getThoughts(): Promise<thoughts[] | null>  {
  const supabase = await createClient();
  const { data } = await supabase
    .from('v_thoughts')
    .select()
    .returns<thoughts[]>()
  
  return data
}

export async function getDados(): Promise<thoughts[]> {
  const res = await fetch(
      '',
      {
          method: 'GET',
          headers: {
              '': ""
          },
      }
  );
  const data = await res.json();

  return data;
}