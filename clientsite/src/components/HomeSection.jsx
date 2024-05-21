import React, {useState} from 'react'
import { useFormik } from 'formik'
import { Avatar, Button } from '@mui/material'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import PlopCard from './PlopCard'


const validationSchema = Yup.object().shape({
    content: Yup.string().required("Plop text is required")
})

const HomeSection = () => {
    const [uploadingImage, setUploadingImage] = useState(false)
    const [selectImage, setSelectedImage] = useState("")

    const handleSubmit= (values) => {
        console.log("values", values)
    }
    const formik = useFormik({
        initialValues:{
            content: "",
            image:""
        },
        onSubmit:handleSubmit,
        validationSchema,
    })

    const handleSelectImage= (e) => {
        setUploadingImage(true)
        const imgUrl = e.target.files[0]
        formik.setFieldValue("image", imgUrl)
        setSelectedImage(imgUrl)
        setUploadingImage(false)
    }

  return (
    <div className='splace-y-5'>
        <section>
            <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
        </section>
        <section className='pb-10'>
            <div className="flex space-x-5">
                <Avatar alt="username" src=""/>
                <div className='w-full'>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input type="text" name='content' placeholder='What is happening?' className={`border-none outline-none text-xl bg-transparent`} {...formik.getFieldProps("content")}/>
                            {formik.errors.content && formik.touched.content && (
                                <span className='text-red-500'>{formik.errors.content}</span>
                            )}
                        </div>
                        {/* <div>
                            <img src="" alt="" />
                        </div> */}
                        <div className="flex justify-between items-center mt-5">
                            <div className='flex splace-x-5 items-center'>
                                <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                <ImageIcon className="text-[#1d9bf0]"/>
                                <input type="file" name="imageFile" className="hidden" onChange={handleSelectImage} />
                                </label>
                               <FmdGoodIcon className="text-[#1d9bf0]"/>
                               <TagFacesIcon className='text-[#1d9bf0]' />
                            </div>

                        </div>
                        <Button sx={{width:"100%", borderRadius: "29px", paddingY:"8px", paddingX:"20px", bgcolor: "#1E88E5"}} variant='contained' type='submit'>
                            Plop
                        </Button>
                    </form>
                </div>
            </div>
        </section>
        <section>
            {[1,1,1,1,].map((item) => <PlopCard/>) }
        </section>
    </div>
  )
}

export default HomeSection