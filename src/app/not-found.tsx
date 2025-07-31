import { BasePage, Typography } from "@/components";

const Error404 = () => {
  return (
    <BasePage error>
      <div style={{ width: "100%", display: "flex", flexFlow: "column", alignItems: "center", textAlign: "center" }}>
        <Typography fontSize="10rem" color="red" glow>404</Typography>
        <Typography fontSize="4rem" color="red" glow>Not Found</Typography>
      </div>
    </BasePage>
  );
};

export default Error404;