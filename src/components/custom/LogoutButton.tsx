import { logoutAction } from "@/data/actions/auth-actions";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button type="submit" className="flex">
        <LogOut className="w-6 h-6 hover:text-primary" />
        <span>Sair</span>
      </button>
    </form>
  );
}