'use server'

import { poems, songs, thoughts } from '@/types/types';
import { createClient } from '@/utils/supabase/server';

export async function getThoughts(): Promise<thoughts[] | null>  {
  const supabase = await createClient();
  const { data } = await supabase
    .from('v_thoughts')
    .select()
    .returns<thoughts[]>()
  
  return data
}

export async function getSongList(): Promise<songs[] | null>  {
  const supabase = await createClient();
  const { data } = await supabase
    .from('t_songs')
    .select()
    .returns<songs[]>()
  
  return data
}

export async function getPoems(): Promise<poems[] | null>  {
  const supabase = await createClient();
  const { data } = await supabase
    .from('v_poems')
    .select()
    .returns<poems[]>()
    
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