import { Button } from '@/components/ui/button'
import { Save,Loader2 } from 'lucide-react'

function FormSaveBtn({className,isLoading}) {
  return (
    <Button className={`${className}`} disabled={isLoading}>
      {
        isLoading ? <Loader2 className='animate-spin'/>:
    <Save />
      }
    Save <span className='hidden sm:block'>Form</span>
  </Button>
  )
}

export default FormSaveBtn
