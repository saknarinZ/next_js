import Link from "next/link";

function Button(props: any) {
  return (
    <Link href={props.link}>
      <a className="align-middle no-underline cursor-pointer bg-primary border border-primary rounded-md text-primary_light py-2 px-6 text-center shadow hover:bg-primary_active active:bg-primary_active">
        {props.children}
      </a>
    </Link>
  );
}

export default Button;
