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
  }[];
}

export const SocialLinks: SocialLinksProps[] = [
  {
    id: 1,
    title: "Facebook",
    icon: <AiFillFacebook />,
    link: "https://www.facebook.com/example",
    color: '00f'
},
{
    id: 2,
    title: "Instagram",
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/example",
    color: 'd62976'
},
{
    id: 4,
    title: "X",
    icon: <FaSquareXTwitter />,
    link: "https://twitter.com/example",
    color: '14171A'
},
{
    id: 3,
    title: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/example",
    color: '0077b5'
},
{
    id: 5,
    title: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/example",
    color: '000'
},
];

function FooterList(item: FooterListProps) {
  return (
    <div>
      <h1 className="text-2xl gap-2 font-semibold">{item.subheading}</h1>
      <ul className="flex flex-col gap-2">
        {item.obj.map(({ id, title }) => (
          <Link
            href="#"
            key={id.toString()}
            isExternal
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
            {SocialLinks.map(({ id, title, icon, link, color }) => (
              <Link
                href={link}
                key={id.toString()}
                isExternal
                // showAnchorIcon
                style={{ color: `#${color}` }}
                className={`text-xl`}
              >
                {icon} &nbsp;
                {title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Divider />
      <p className="text-justify w-10/12 m-auto TextAlignLast">
        By continuing to use this website, you agree to our Terms of Service,
        Cookie Policy, Privacy Policy, and Content Policies. All trademarks are
        properties of their respective owners. 2023-2024 &copy; Icy
        Indulgence&trade;. All rights reserved.
      </p>
      <p className="text-center w-10/12 m-auto -mb-5 text-black dark:text-white">
        Designed and Developed by <a href="https://portfolio-revisit.vercel.app/" target="_blank" className="text-red-500 hover:underline">@kitish</a>
      </p>
    </div>
  );
}
