import { setActiveTab } from '@/app/features/uiSlice'
import Layout from '@/layout/Layout'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function FormSubmission() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setActiveTab("View Submission"))
    },[])
  return (
    <Layout>
        <section className='p-3'>

      FormSubmission
        </section>
    </Layout>
  )
}

export default FormSubmission
