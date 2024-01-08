import { AboutIcyIndulgence, LearnMore } from "@/lib/constant";
import { Link } from "@nextui-org/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import { Divider } from "@nextui-org/divider";

interface FooterListProps {
  subheading: string;
  obj: {
    id: number;
    title: string;
    href: string,
    isExternal: boolean,
  }[];
}

function FooterList(item: FooterListProps) {
  return (
    <div>
      <h1 className="text-2xl gap-2 font-semibold">{item.subheading}</h1>
      <ul className="flex flex-col gap-2">
        {item.obj.map(({ id, title, href, isExternal }) => (
          <Link
            href={href}
            key={id.toString()}
            isExternal={isExternal}
            showAnchorIcon
            className="text-xl"
          >
            {title}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="flex justify-start gap-4 flex-col m-6 p-2">
      <h1 className="text-4xl font-bold sm:text-center">Icy Indulgence</h1>
      <div className="flex flex-col justify-between sm:justify-evenly sm:flex-row gap-y-3">
        <FooterList subheading="About Indulgence" obj={AboutIcyIndulgence} />
        <FooterList subheading="Learn More" obj={LearnMore} />
        <div>
          <h1 className="text-2xl gap-2 font-semibold">Social Links</h1>
          <ul className="flex flex-col sm:flex-col gap-2">
            <Link
              href="https://www.facebook.com/charandeep.kumar.12"
              key="1"
              isExternal
              className="text-xl text-[#00f]"
            >
              <AiFillFacebook /> &nbsp; Facebook
            </Link>
            <Link
              href="https://www.instagram.com/_kitish"
              key="2"
              isExternal
              className="text-xl text-[#d62976]"
            >
              <AiFillInstagram /> &nbsp; Instagram
            </Link>
            <Link
              href="https://twitter.com/_kitish"
              key="1"
              isExternal
              className="text-xl text-[#14171a] dark:text-white"
            >
              <FaSquareXTwitter /> &nbsp; X
            </Link>

            <Link
              href="https://www.linkedin.com/in/charandeep/"
              key="1"
              isExternal
              className="text-xl text-[#0077b5]"
            >
              <AiFillLinkedin /> &nbsp; LinkedIn
            </Link>

            <Link
              href="https://www.github.com/charandeep7"
              key="1"
              isExternal
              className="text-xl text-[#000] dark:text-white"
            >
              <FaGithub /> &nbsp; Github
            </Link>
          </ul>
        </div>
      </div>
      <Divider />
      <p className="text-justify w-10/12 m-auto TextAlignLast">
        By continuing to use this website, you agree to our Terms of Service,
        Cookie Policy, Privacy Policy, and Content Policies. All trademarks are
        properties of their respective owners. 2023-{new Date().getFullYear()}{" "}
        &copy; Icy Indulgence&trade;. All rights reserved.
      </p>
      <p className="text-center w-10/12 m-auto -mb-5 text-black dark:text-white">
        Designed and Developed by{" "}
        <a
          href="https://portfolio-revisit.vercel.app/"
          target="_blank"
          className="text-red-500 hover:underline"
        >
          @kitish
        </a>
      </p>
    </div>
  );
}
