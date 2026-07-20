import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://laerdxalhjtclmxcwctm.supabase.co',
  'sb_publishable_L8CUZH0KvYecouU_wEuYFg_ZvlJ6X5b'
)

async function loadData() {
  const { data, error } = await supabase
    .from('murid')
    .select('*')

  const table = document.getElementById('tableBody')

  data.forEach(item => {
    table.innerHTML += `
      <tr>
        <td>${item.Nama}</td>
        <td>${item.Hari}</td>
        <td>${item.Waktu}</td>
        <td>${item.Program}</td>
      </tr>
    `
  })
}

loadData()