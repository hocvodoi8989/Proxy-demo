
import HomePage from "./layouts/homePage/page";

export default function Home( { children }) {
  return (
    <HomePage>
      <div>{children}</div>
    </HomePage>
    
  );
}
