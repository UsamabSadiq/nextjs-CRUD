
const addtopic = () => {
    return (
        <>
            <div className="main border-2 border-slate-200 h-[40vh] flex flex-col justify-center mx-5 px-3 rounded-2xl shadow-2xl">
                <h2 className="text-center text-xl font-bold text-slate-400 mb-3">ADD TOPICS</h2>
                <form className="flex flex-col gap-4">
                    <input type="text" name="title" placeholder="Add Title" className="border border-slate-500 px-8 py-2 text-lg font-semibold" />
                    <input type="text" name="description" placeholder="Add Description" className="border border-slate-500 px-8 py-2 text-md font-medium" />

                    <button type="submit" className="bg-green-500 text-lg font-semibold text-white w-fit px-4 py-2">Add Topic</button>
                </form>
            </div>
        </>
    )
}

export default addtopic
