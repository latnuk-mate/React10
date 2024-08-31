
function NoteSlide() {
  return (
            <div className="col-span-2 shadow-sm p-3 border rounded-md">
                <h5 className='text-center text-xl font-serif text-amber-500'>Your Notes</h5>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="shadow-md border p-3 rounded-sm">
                    <h5 className='italic font-semibold mb-3'>Notes Title</h5>
                    <p className='text-gray-600'>note Body</p>
                </div>

                <div className="shadow-md border p-3 rounded-sm">
                    <h5 className='italic font-semibold mb-3'>Notes Title</h5>
                    <p className='text-gray-600'>note Body</p>
                </div>

                <div className="shadow-md border p-3 rounded-sm">
                    <h5 className='italic font-semibold mb-3'>Notes Title</h5>
                    <p className='text-gray-600'>note Body</p>
                </div>

                <div className="shadow-md border p-3 rounded-sm">
                    <h5 className='italic font-semibold mb-3'>Notes Title</h5>
                    <p className='text-gray-600'>note Body</p>
                </div>
            </div>
        </div>
  )
}

export default NoteSlide