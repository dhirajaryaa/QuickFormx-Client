import React from 'react'
import { useSelector } from 'react-redux'

function FormPreview() {
  const { title, description, fields } = useSelector((state) => state.formBuilder)

  return (
    <div className='border-2 shadow-sm w-full rounded-lg p-4 bg-white'>
      {/* Form Header */}
      <div className='mb-6'>
        <h3 className='text-2xl font-semibold text-center'>{title}</h3>
        <p className='text-sm text-center text-gray-500'>{description}</p>
      </div>

      {/* Form Fields */}
      <div className='space-y-4'>
        {fields.map((field) => (
          <div key={field.id} className='flex flex-col gap-1'>
            <label className='font-medium'>
              {field.label} {field.required && <span className='text-red-500'>*</span>}
            </label>

            {/* Text / Email / Number / Date */}
            {["text", "email", "number", "date"].includes(field.type) && (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                disabled
                readOnly
                className='border rounded px-3 py-2 outline-none focus:ring w-full bg-gray-100 cursor-not-allowed'
              />
            )}

            {/* Textarea */}
            {field.type === "textarea" && (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                disabled
                readOnly
                className='border rounded px-3 py-2 outline-none focus:ring w-full bg-gray-100 cursor-not-allowed'
              />
            )}

            {/* Select Dropdown */}
            {field.type === "select" && (
              <select
                name={field.name}
                disabled
                className='border rounded px-3 py-2 outline-none focus:ring w-full bg-gray-100 cursor-not-allowed'
              >
                <option value="">Select an option</option>
                {field.options?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}

            {/* Checkbox List */}
            {field.type === "checkbox" && field.options?.length > 0 && (
              <div className='flex flex-col gap-2'>
                {field.options.map((option, index) => (
                  <label key={index} className='inline-flex items-center gap-2 text-gray-500'>
                    <input type='checkbox' name={`${field.name}[]`} value={option} disabled />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}

            {/* Radio List */}
            {field.type === "radio" && field.options?.length > 0 && (
              <div className='flex flex-col gap-2'>
                {field.options.map((option, index) => (
                  <label key={index} className='inline-flex items-center gap-2 text-gray-500'>
                    <input type='radio' name={field.name} value={option} disabled />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormPreview
