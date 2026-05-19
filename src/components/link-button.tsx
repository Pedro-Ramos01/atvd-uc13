import { Link, LinkProps } from "expo-router"

type LinkButtonProps = LinkProps & {
    tittle: string;
};
export function LinkButton({tittle, ...rest}: LinkButtonProps){
    return (
        <Link className="text-slate-300 text-center text-base font-body" {...rest}>
            {tittle}
        </Link> 
    )
}