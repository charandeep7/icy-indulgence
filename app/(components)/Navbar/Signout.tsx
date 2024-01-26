import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

export default function SignOut() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: session, status } = useSession();
  return (
    <>
      <Button onPress={onOpen} color="danger" size="sm" variant="flat">
        Sign Out
      </Button>
      <Modal
        as={"div"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="opaque"
        className="relative inset-0 m-3 cursor-move"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Sign Out?
              </ModalHeader>
              <ModalBody>
                <p>Do you really want to sign out?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  onPress={() => signOut({ redirect: false })}
                >
                  Sign Out
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
