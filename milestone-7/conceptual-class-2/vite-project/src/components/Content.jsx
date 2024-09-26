
import { useLoaderData, useNavigation } from "react-router-dom";
import placeholderImg from "../assets/placeholder.png";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import SpinnerLodding from "./SpinnerLodding";
const Content = () => {
  const blog = useLoaderData();
  const { title, cover_image, tags,body_html } = blog;
  const navigation = useNavigation();
  if(navigation.state === "loading"){
    return <SpinnerLodding />
  }
  return (
    <div>
      <div className="border-2 border-primary  border-opacity-30 ">
        <div
          rel="noopener noreferrer"
          className="   mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || placeholderImg}
          />
        </div>
      </div>
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
        {tags.map((item, i) => {
          return (
            <div key={i}>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
              >
                #{item}
              </a>
            </div>
          );
        })}
      </div>
      <div>
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <div className="my-5" >
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Content;
