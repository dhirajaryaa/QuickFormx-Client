import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'

function FormSaveBtn({className}) {
  return (
    <Button className={`${className}`}>
    <Save />
    Save <span className='hidden sm:block'>Form</span>
  </Button>
  )
}

export default FormSaveBtn
