import { checkUser } from "@/lib/checkUser";
const Navbar : React.FC = () => {
    const user = checkUser();
  return (
    <div>Navbar</div>   
  )
}

export default Navbar;