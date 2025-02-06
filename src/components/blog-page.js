import BodyWr from "./body-wr";
import AsideContact from "./asideContact";
import BlogContainer from "./blog/blog-main-container";
import BlogIntroCol from "./blog/blog-intro-col";
import BlogItemsTab from "./blog/blog-items-tab";

function BlogPage() {
  return (
    <>
      <BodyWr>
        <BlogContainer>
          <BlogIntroCol />
          <BlogItemsTab />
        </BlogContainer>

        <AsideContact />
      </BodyWr>
    </>
  );
}

export default BlogPage;
