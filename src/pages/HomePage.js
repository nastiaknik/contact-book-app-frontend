import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Contact Book</title>
      </Helmet>
      <div
        style={{
          height: "calc(100vh - 100px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ fontWeight: 500, fontSize: 48, textAlign: "center" }}>
          Welcome to Contact Book!
        </h2>
      </div>
    </>
  );
}
