import article from "data/article.json";
import data from "data/data.json";
import {
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from "components";
import BlogCard from "../BlogCard/BlogCard";

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center"></Heading>
        <BlogCard
          tag={article.tag}
          poster={article.poster}
          title={article.title}
          description={article.description}
          name={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main Statistics" stats={data} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory />
      </Container>
    </Section>
  );
};
