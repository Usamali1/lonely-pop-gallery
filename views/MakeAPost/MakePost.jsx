import { useState } from "react";
import Link from "next/link";

const MakePost = () => {
  const [title, setTitle] = useState("");
  const [discordName, setdiscordName] = useState("");
  const [twitterLink, settwitterLink] = useState("");
  const [description, setdescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState();

  const createPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    const postData = {
      title: title,
      discordName: discordName,
      twitterLink: twitterLink,
      description: description,
    };
    let formData = new FormData();
    formData.append("files.designFile", media);
    formData.append("data", JSON.stringify(postData));
    const request = await fetch("http://147.182.247.8:1337/api/posts", {
      method: "POST",
      body: formData,
    });

    const response = await request.json();
    if (response) {
      setLoading(false);
      setTitle("");
      setdiscordName("");
      settwitterLink("");
      setdescription("");
      setMedia("");
    }

    console.log(response, "response");
  };

  return (
    <div>
      <div className="main-container make-post-spacing relative">
        <Link href="/">
          <div className="md:absolute flex items-center gap-x-12 cursor-pointer">
            <img src="/images/126.png" alt="" className="" />
            <p className="text-2xl">Back</p>
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="text-[65px] 2xl:mb-[134px] xl:mb-24 lg:mb-16 mb-12">
              Make a Post{" "}
            </h1>
            <div>
              {loading ? (
                <h3 className="text-3xl text-center h-full items-center">
                  "Submitting...."
                </h3>
              ) : (
                <form onSubmit={createPost}>
                  <div>
                    <lable className="make-input-title">Title</lable>
                    <br />
                    <input
                      type="text"
                      className="input-post"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <lable className="make-input-title">Discord Name</lable>
                    <br />
                    <input
                      type="text"
                      className="input-post"
                      onChange={(e) => setdiscordName(e.target.value)}
                    />
                  </div>
                  <div>
                    <lable className="make-input-title">Twitter Link</lable>
                    <br />
                    <input
                      type="text"
                      className="input-post"
                      onChange={(e) => settwitterLink(e.target.value)}
                    />
                  </div>
                  <div>
                    <lable className="make-input-title">Description</lable>
                    <textarea
                      id="txtArea"
                      className="input-message-2 mt-2 rounded-md focus:rounded-md"
                      rows="8"
                      onChange={(e) => setdescription(e.target.value)}
                    />
                  </div>
                  <div className="flex  mt-3">
                    <div>
                      <h4 className="make-input-title pb-3 font-semibold capitalize">
                        Upload Design File
                      </h4>
                      <input
                        type="file"
                        onChange={(e) => setMedia(e.target.files[0])}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-10">
                    <button
                      type="submit"
                      className="bg-black text-white px-10 py-2.5 rounded-lg transition-all duration-300 hover:shadow-2xl"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePost;
