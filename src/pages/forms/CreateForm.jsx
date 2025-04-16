import { addField, setDescription, setTitle } from '@/app/features/formBuilderSlice';
import DynamicField from '@/components/custom/forms/DynamicField';
import { Button } from '@/components/ui/button';
import Layout from '@/layout/Layout'
import { ArrowLeft, EyeClosed, PlusCircle, Save, Eye } from 'lucide-react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CreateForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, description, fields } = useSelector((state) => state.formBuilder);
  const [showPreview, setShowPreview] = useState("false");

  //! add new field 
  function handleNewFieldAdd() {
    dispatch(
      addField({
        id: fields.length + 1,
        type: "text",
        label: "untitled field",
        name: nanoid(8),
        required: true,
        placeholder: "Enter hint text"
      })
    )
  }

  return (
    <Layout>
      <section className='p-3'>
        <div className="flex items-center justify-between my-3" >
          <Button onClick={() => navigate(-1)} type="button" variant={'outline'}>
            <ArrowLeft />
            Back
          </Button>
          <Button onClick={() => setShowPreview(!showPreview)}>
            {
              !showPreview ? <>
                <Eye />
                Show
              </> : <>
                <EyeClosed />
                Hide
              </>
            } Preview
          </Button>
        </div>
        <div className='w-full grid grid-cols-1 gap-2 md:grid-cols-2'>
          {/* form  */}
          <div className='border-2 h-full w-full rounded-lg p-2'>
            <div className='border rounded-lg p-4 w-full shadow-sm'>
              {/* title  */}
              <input value={title} onChange={(e) => dispatch(setTitle(e.target.value))} id="title" name="title" className={"border-0 outline-0 text-xl sm:text-2xl font-medium "} placeholder="Untitled Form" />
              {/* description  */}
              <textarea value={description} onChange={(e) => dispatch(setDescription(e.target.value))} id="description" name="description" className={"w-full border-0 outline-0 font-base text-sm mt-3 bg-accent p-3 rounded-lg resize-none"} placeholder="Enter Form Description" rows={5} />
            </div>
            <div className='mt-4'>
              {
                fields?.map((field) =>
                  <DynamicField key={field.id} field={field} />
                )
              }
            </div>
            <div className="flex items-center justify-between gap-2 mt-4" >
              <Button onClick={handleNewFieldAdd} type="button" variant={'outline'}>
                <PlusCircle />
                Add Field
              </Button>
              <Button >
                <Save />
                Save Form
              </Button>
            </div>
          </div>

          {/* preview  */}
          {
            showPreview &&
            <div className='border-2 h-full w-full rounded-lg p-2'>
              Preview
            </div>
          }
        </div>
      </section>
    </Layout>
  )
}

export default CreateForm;
