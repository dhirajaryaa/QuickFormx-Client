import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Trash2 } from 'lucide-react';
import { FieldSelector } from '..';
import { useDispatch } from 'react-redux';
import { deleteField, updateFieldLabel, updateFieldPlaceholder, updateFieldRequired } from '@/app/features/formBuilderSlice';

function DynamicField({ field: { id, label,type, placeholder, required } }) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteField(id))
    };

    const handleLabelChange = (id,value) => {
        dispatch(updateFieldLabel({id,label:value}));
    };

    const handlePlaceholderChange = (id,value) => {
        dispatch(updateFieldPlaceholder({id,placeholder:value}));
    };

    const handleRequiredToggle = (id)=>{
        dispatch(updateFieldRequired(id))
    }

    return (
        <div className='w-full bg-accent/60 border shadow-sm rounded-lg p-4 mt-4 gap-3'>
            <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
                {/* label    */}
                <div className='flex items-start flex-col'>
                    <Label htmlFor={`label_${id}`} className={'text-sm sm:text-base '}>Field Name {required && <span className='text-destructive'>*</span>} </Label>
                    <input
                    value={label}
                    onChange={(e)=>handleLabelChange(id,e.target.value)}
                    id={`label_${id}`} className={"border-0 w-full outline-0 border-b-2"} />
                </div>
                {/* field selector  */}
                <FieldSelector id={id} type={type} />
            </div>
            {/* placeholder  */}
            <div className='w-full my-4'>
                <Label htmlFor={`placeholder_${id}`}>Placeholder </Label>
                <input 
                id={`placeholder_${id}`}
                value={placeholder}
                onChange={(e)=>handlePlaceholderChange(id,e.target.value)}
                className={"mt-1 text-sm border-0 w-full outline-0 border-b-2"} placeholder='Enter hint text' />
            </div>

            <div className="flex items-center justify-between gap-2 mt-3">
                {/* delete btn  */}
                <Button variant={'destructive'} onClick={() => handleDelete(id)} size={'icon'}>
                    <Trash2 />
                </Button>
                {/* required switch  */}
                <div className='flex space-x-2 items-center'>
                    <Label htmlFor="required">Required</Label>
                    <Switch id="required" checked={required}
                        onCheckedChange={() => handleRequiredToggle(id)
                        } />
                </div>

            </div>
        </div>
    )
}

export default DynamicField
