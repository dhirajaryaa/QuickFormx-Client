import { handleOptionChange, removeOptionField } from '@/app/features/formBuilderSlice'
import { Button } from '@/components/ui/button'
import { Circle,ListTree,Square,X } from 'lucide-react'
import { useDispatch } from 'react-redux'

function DynamicFieldOptions({ id, type, index,option }) {
    const dispatch = useDispatch();
    const handleOptionRemove = () => {
        dispatch(removeOptionField(id))
    };

    const handleChange = (value) => {        
        dispatch(handleOptionChange({ id,index, option:value }));
    }

    return (
        <div className='flex gap-2 items-center justify-between w-full my-2'>
            <div className='flex gap-2 w-full items-end'>
                {
                    type === "checkbox" && <Square className='size-6' />
                }
                {
                    type === "radio" && <Circle className='size-6' />
                }
                {
                    type === "select" && <ListTree className='size-6' />
                }

                {/* input  */}
                <input
                    value={option}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    id={`label_${index}`} className={"border-0 w-full outline-0 border-b-2 mb-1"} />
            </div>
            <Button
                onClick={handleOptionRemove}
                type="button" variant={"ghost"} className={"w-fit"}>
                <X className='size-6' />
            </Button>
        </div>
    )
}

export default DynamicFieldOptions
