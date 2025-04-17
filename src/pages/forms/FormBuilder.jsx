import {
  addField,
  resetBuilder,
  setTitle,
  setDescription,
  setFormData
} from '@/app/features/formBuilderSlice';
import { setForms } from '@/app/features/formSlice';
import { setActiveTab } from '@/app/features/uiSlice';
import {
  useCreateFormMutation,
  useGetAllFormsQuery,
  useGetFormQuery,
  useUpdateFormMutation
} from '@/app/services/formApi';
import { FormPreview, FormSaveBtn } from '@/components/custom';
import DynamicField from '@/components/custom/forms/DynamicField';
import { Button } from '@/components/ui/button';
import Layout from '@/layout/Layout';
import { ArrowLeft, EyeClosed, PlusCircle, Save, Eye } from 'lucide-react';
import { nanoid } from 'nanoid';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

function FormBuilder() {
  const { id: formId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [actionType, setActionType] = useState(formId && pathname.includes('/edit') ? 'edit' : 'add');
  const [showPreview, setShowPreview] = useState(false);

  const { refetch } = useGetAllFormsQuery();
  const [addForm, { isLoading }] = useCreateFormMutation();
  const [updateForm] = useUpdateFormMutation();
  const { data: fetchForm } = useGetFormQuery(formId);

  const { forms: editForms } = useSelector((state) => state.form);
  const { title, description, fields } = useSelector((state) => state.formBuilder);

  // Local state for performance
  const [localTitle, setLocalTitle] = useState('');
  const [localDescription, setLocalDescription] = useState('');

  useEffect(() => {
    if (actionType === 'edit') {
      dispatch(setActiveTab('Edit Form'));
      const editForm = editForms?.find((field) => field._id === formId);
      const formData = fetchForm || editForm;
      if (formData) {
        dispatch(setFormData(formData));
        setLocalTitle(formData.title || '');
        setLocalDescription(formData.description || '');
      }
    } else {
      dispatch(setActiveTab('Create Form'));
      setLocalTitle('');
      setLocalDescription('');
    }
  }, [actionType, dispatch, editForms, formId, fetchForm]);

  function handleNewFieldAdd() {
    dispatch(
      addField({
        id: fields.length + 1,
        type: 'text',
        label: '',
        name: nanoid(8),
        required: true,
        placeholder: ''
      })
    );
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    // Push local state to Redux
    dispatch(setTitle(localTitle));
    dispatch(setDescription(localDescription));

    const data = {
      title: localTitle,
      description: localDescription,
      fields
    };

    if (actionType === 'add') {
      addForm(data)
        .unwrap()
        .then(() => {
          toast.success('Form Saved 😎, Ready to submission');
          refetch()
          .unwrap()
          .then((forms) => {
            dispatch(setForms(forms))
            dispatch(resetBuilder());
            navigate('/forms');
            });
        })
        .catch((error) => toast.error(error?.data?.message));
    } else {
      updateForm({ id: formId, data })
        .unwrap()
        .then(() => {
          toast.success('Form Updated 😍');
          refetch()
            .unwrap()
            .then((forms) => {
              dispatch(setForms(forms));
              // navigate('/forms');
            });
        })
        .catch((error) => toast.error(error?.data?.message));
    }
  }

  const memoizedFields = useMemo(
    () =>
      fields.map((field, index) => (
        <DynamicField key={index} field={field} />
      )),
    [fields]
  );

  return (
    <Layout>
      <section className="p-3">
        <form onSubmit={handleFormSubmit}>
          <div className="flex items-center justify-between my-3">
            <Button onClick={() => navigate(-1)} type="button" variant="outline">
              <ArrowLeft />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <FormSaveBtn isLoading={isLoading} />
              <Button type="button" onClick={() => setShowPreview((prev) => !prev)}>
                {!showPreview ? (
                  <>
                    <Eye />
                    Show
                  </>
                ) : (
                  <>
                    <EyeClosed />
                    Hide
                  </>
                )}{' '}
                Preview
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <div className="border-2 w-full rounded-lg p-2 overflow-y-auto md:h-[85vh]">
              <div className="rounded-lg p-4 w-full">
                <input
                  value={localTitle}
                  onChange={(e) => setLocalTitle(e.target.value)}
                  className="border-0 outline-0 text-xl sm:text-2xl font-medium w-full"
                  placeholder="Untitled Form"
                />
                <textarea
                  value={localDescription}
                  onChange={(e) => setLocalDescription(e.target.value)}
                  className="w-full border-0 outline-0 font-base text-sm mt-3 bg-accent p-3 rounded-lg resize-none"
                  placeholder="Enter Form Description"
                  rows={5}
                />
              </div>

              <div className="mt-4">{memoizedFields}</div>

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
