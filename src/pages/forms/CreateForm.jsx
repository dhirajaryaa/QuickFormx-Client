import { FormField } from '@/components/custom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Layout from '@/layout/Layout'
import { SaveIcon } from 'lucide-react';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';

function CreateForm() {
  const [dynamicField, setDynamicField] = useState([{
    id: "1",
    label: `Untitled Field`,
    name: "untitled_field",
    placeholder: "",
    required: true
  }]);
  function handleDynamicFieldAdd() {
    setDynamicField((prev) => [...prev, {
      id: dynamicField.length + 1,
      label: `Untitled Field`,
      name: `untitled_field`,
      placeholder: "",
      required: true
    }]);
  };
  function handleDynamicFieldRemove(id) {
    setDynamicField(dynamicField.filter((field) => field.id !== id))
  };
  return (
    <Layout>
      <section className='p-3 mx-auto'>
        <form action="">
          <div className='grid grid-col-1 gap-y-2 w-md border-2 shadow-lg p-5 rounded-lg'>
            {/* title  */}
            <div className="w-full text-xl mt-3 font-medium sm:text-2xl  outline-0" >
              Untilled Form
            </div>
            <Separator />
            {/* title  */}
            <div className="w-full mt-2 text-xs sm:text-sm text-gray-500 outline-0" >
              Form Description
            </div>
            <Separator />

            {/* dynamicField  */}
            {
              dynamicField?.map((field) => <FormField dynamicField={field} key={field.id} handleDynamicFieldRemove={handleDynamicFieldRemove} />)
            }

            <div className='flex justify-between items-center mt-2'>
              <Button type="button" variant={'outline'} onClick={handleDynamicFieldAdd} size={"sm"} >
                <PlusCircle /> Add Field
              </Button>
              <Button type="submit" onClick={handleDynamicFieldAdd} size={"sm"} >
                <SaveIcon /> Save Form
              </Button>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default CreateForm;
