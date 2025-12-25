import { HiCalculator, HiOutlineCheck } from "react-icons/hi";

interface UserMenuProps {
  name?: string;
}

export default function Icons({ name }: UserMenuProps) {
  return <>
  <div><HiCalculator size={240}/> {name}</div>
  <div><HiOutlineCheck size={240}/></div>
  </>
}
