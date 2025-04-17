import { addField, resetBuilder, setDescription, setFormData, setTitle } from '@/app/features/formBuilderSlice';
import { setForms } from '@/app/features/formSlice';
import { setActiveTab } from '@/app/features/uiSlice';
import { useCreateFormMutation, useGetAllFormsQuery, useUpdateFormMutation } from '@/app/services/formApi';
import { FormPreview, FormSaveBtn } from '@/components/custom';
import DynamicField from '@/components/custom/forms/DynamicField';
import { Button } from '@/components/ui/button';
import Layout from '@/layout/Layout'
import { ArrowLeft, EyeClosed, PlusCircle, Save, Eye } from 'lucide-react';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { NotFound } from '..';

function FormBuilder() {
  const { id: formId } = useParams();
  const [actionType, setActionType] = useState(formId ? "edit" : "add");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { refetch } = useGetAllFormsQuery();
  const [addForm, { isLoading }] = useCreateFormMutation();
  const [updateForm] = useUpdateFormMutation();

  const { forms: editForms } = useSelector((state) => state.form);
  const { title, description, fields } = useSelector((state) => state.formBuilder);
  const [showPreview, setShowPreview] = useState(false);

  // Setup form data on load
  useEffect(() => {
    if (actionType === "edit") {
      const editForm = editForms?.find((field) => field._id === formId);
      dispatch(setActiveTab("Edit Form"));
      if (editForm) {
        dispatch(setFormData(editForm));
      }
    } else {
      dispatch(setActiveTab("Create Form"));
    }
  }, [actionType, dispatch, editForms, formId]);

  // Add new field
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
    );
  }

  // Handle submit
  function handleFormSubmit(e) {
    e.preventDefault();
    const data = { title, description, fields };

    if (actionType === "add") {
      addForm(data).unwrap()
        .then(() => {
          toast.success("Form Saved 😎, Ready to submission");
          navigate("/forms");
          refetch().unwrap().then((forms) => {
            dispatch(setForms(forms));
          });
          dispatch(resetBuilder());
        }).catch((error) => {
          toast.error(error?.data?.message);
        });
    } else {
      updateForm({ id: formId, data }).unwrap()
        .then(() => {
          toast.success("Form Updated 😍");
          navigate("/forms");
          refetch().unwrap().then((forms) => {
            dispatch(setForms(forms));
          });
          dispatch(resetBuilder());
        }).catch((error) => {
          toast.error(error?.data?.message);
        });
    }
  }

  return (
    <Layout>
      <section className='p-3'>
        <form onSubmit={handleFormSubmit}>
          <div className="flex items-center justify-between my-3">
            <Button onClick={() => navigate(-1)} type="button" variant="outline">
              <ArrowLeft />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <FormSaveBtn isLoading={isLoading} />
              <Button type="button" onClick={() => setShowPreview(prev => !prev)}>
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

          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <div className="border-2 w-full rounded-lg p-2 overflow-y-auto md:h-[85vh]">
              <div className="rounded-lg p-4 w-full">
                <input
                  value={title}
                  onChange={(e) => dispatch(setTitle(e.target.value))}
                  className="border-0 outline-0 text-xl sm:text-2xl font-medium w-full"
                  placeholder="Untitled Form"
                />
                <textarea
                  value={description}
                  onChange={(e) => dispatch(setDescription(e.target.value))}
                  className="w-full border-0 outline-0 font-base text-sm mt-3 bg-accent p-3 rounded-lg resize-none"
                  placeholder="Enter Form Description"
                  rows={5}
                />
              </div>

              <div className="mt-4">
                {
                  fields?.map((field, index) =>
                    <DynamicField key={index} field={field} />
                  )
                }
              </div>

              <div className="flex items-center justify-between gap-2 mt-4">
                <Button onClick={handleNewFieldAdd} type="button" variant="outline">
                  <PlusCircle />
                  Add Field
                </Button>
              </div>
            </div>

            {showPreview && <FormPreview />}
          </div>
        </form>
      </section>
    </Layout>
  );
}

export default FormBuilder;
