import { addField, resetBuilder, setDescription, setTitle } from '@/app/features/formBuilderSlice';
import { useCreateFormMutation } from '@/app/services/formApi';
import { FormPreview, FormSaveBtn } from '@/components/custom';
import DynamicField from '@/components/custom/forms/DynamicField';
import { Button } from '@/components/ui/button';
import Layout from '@/layout/Layout'
import { ArrowLeft, EyeClosed, PlusCircle, Save, Eye } from 'lucide-react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


function CreateForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addForm, { isLoading }] = useCreateFormMutation();
  const { title, description, fields } = useSelector((state) => state.formBuilder);
  const [showPreview, setShowPreview] = useState("false");

  //! add new field 
  function handleNewFieldAdd() {
    dispatch(
      addField({
        id: fields.length + 1,
        type: "text",
        label: "",
        name: nanoid(8),
        required: true,
        placeholder: ""
      })
    )
  };

  //! handle form submit 
  function handleFormSubmit(e) {
    e.preventDefault();
    const data = { title, description, fields };
    addForm(data).unwrap().then((data) => {
      toast.success("Form Saved 😎, Ready to submission");
      navigate("/forms");
      // reset form 
      dispatch(resetBuilder())
    }).catch((error) => {
      toast.error(error?.data?.message);
    })
  };

  return (
    <Layout>
      <section className='p-3'>
        <form onSubmit={handleFormSubmit}>
          <div className="flex items-center justify-between my-3 " >
            <Button onClick={() => navigate(-1)} type="button" variant={'outline'}>
              <ArrowLeft />
              Back
            </Button>
            <div className="flex items-center gap-2">
              {/* save form  */}
              <FormSaveBtn isLoading={isLoading}/>
              <Button type="button" onClick={() => setShowPreview(!showPreview)} >
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
          </div>
          <div className={`flex flex-wrap md:flex-nowrap gap-2`}>
            {/* form  */}
            <div className='border-2 w-full rounded-lg p-2 overflow-y-auto md:h-[85vh]'>
              <div className='rounded-lg p-4 w-full'>
                {/* title  */}
                <input value={title} onChange={(e) => dispatch(setTitle(e.target.value))} id="title" name="title" className={"border-0 outline-0 text-xl sm:text-2xl font-medium w-full"} placeholder="Untitled Form" />
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
              </div>
            </div>

            {/* preview  */}
            {
              showPreview &&
              <FormPreview />
            }
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default CreateForm;
