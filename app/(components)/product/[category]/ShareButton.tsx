"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { IoMdShareAlt } from "react-icons/io";
import { URLMaker } from "@/lib/urlMaker";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ShareButton({ subtype }: { subtype: string }) {
  const [domain, setDomain] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    const pathname = location.href;
    const copyURL = URLMaker(pathname, subtype);
    setDomain(copyURL);
  }, []);
  const handleCopy = () => {
    navigator.clipboard.writeText(domain)
    toast.success('Copied ✅')
    return () => onclose
  }
  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-[#0096FF] w-1/2 p-2"
        endContent={<IoMdShareAlt />}
        size="md"
      >
        Share
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {subtype}
              </ModalHeader>
              <ModalBody>
                <Input type="url" value={domain} isReadOnly isDisabled />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleCopy} >
                  Copy
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
