import { updateFieldType } from "@/app/features/formBuilderSlice";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
} from "@/components/ui/select"
import {
    Text,
    AlignLeft,
    Mail,
    Disc2,
    Hash,
    CheckSquare,
    ListTree,
    Calendar,
    UploadCloud
} from "lucide-react"
import { useDispatch } from "react-redux"

function FieldSelector({ type,id }) {    
    
    const dispatch = useDispatch();

    const handleFieldChange = (id,value)=>{
        dispatch(updateFieldType({id,type:value}))
    }

    return (
        <Select onValueChange={(value) => handleFieldChange(id,value)} defaultValue={type}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Field Type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Input Fields</SelectLabel>
                    <SelectItem value="text" >
                        <Text className="size-4" />
                        Short Answer
                    </SelectItem>
                    <SelectItem value="textarea">
                        <AlignLeft className="size-4" />
                        Long Answer
                    </SelectItem>
                    <SelectItem value="email">
                        <Mail className="size-4" />
                        Email
                    </SelectItem>
                    <SelectItem value="number">
                        <Hash className="size-4" />
                        Number
                    </SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Choice Fields</SelectLabel>
                    <SelectItem value="radio">
                        <Disc2 className="size-4" />
                        Multiple Choice
                    </SelectItem>
                    <SelectItem value="checkbox">
                        <CheckSquare className="size-4" />
                        Checkboxes
                    </SelectItem>
                    <SelectItem value="select">
                        <ListTree className="size-4" />
                        Dropdown
                    </SelectItem>
                </SelectGroup>

                <SelectGroup>
                    <SelectLabel>Other Fields</SelectLabel>
                    <SelectItem value="date">
                        <Calendar className="size-4" />
                        Date Picker
                    </SelectItem>
                    {/* <SelectItem value="file">
                        <UploadCloud className="size-4" />
                        File Upload
                    </SelectItem> */}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default FieldSelector
