import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ColorModeScript,
  useDisclosure,
  IconButton,
  Code,
  Text,
  Tooltip,
  Flex,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import * as React from "react";
import ReactDOM from "react-dom";
import { Logo } from "./App";
import * as serviceWorker from "./serviceWorker";

function Info() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        variant="ghost"
        colorScheme="blue"
        aria-label="Info"
        size="lg"
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
        icon={<InfoIcon />}
        onClick={onOpen}
      />

      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <Text>It's quite empty in here 👀</Text>
              <br />
              <Text fontSize="xl">License</Text>
              <Code>
                <pre style={{ fontFamily: "monospace", fontWeight: 400 }}>
                  
                </pre>
              </Code>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <a href="https://github.com/hira-institute/logo-designer">
              <IconButton
                colorScheme="whatsapp"
                aria-label="GitHub"
                size="lg"
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                }}
                icon={
                  <svg
                    style={{ maxHeight: "24px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    clipRule="evenodd"
                    viewBox="0 0 136 133"
                  >
                    <path fill="none" d="M0 0H135.334V132.5H0z"></path>
                    <clipPath id="_clip1">
                      <path d="M0 0H135.334V132.5H0z"></path>
                    </clipPath>
                    <g clipPath="url(#_clip1)">
                      <path
                        fill="#181717"
                        d="M67.661.052C30.182.052-.206 30.44-.206 67.927c0 29.988 19.446 55.425 46.417 64.405 3.396.62 4.633-1.475 4.633-3.275 0-1.609-.058-5.88-.091-11.542-18.88 4.1-22.863-9.1-22.863-9.1-3.087-7.838-7.537-9.925-7.537-9.925-6.163-4.213.466-4.129.466-4.129 6.813.483 10.396 6.996 10.396 6.996 6.054 10.37 15.888 7.375 19.754 5.641.617-4.387 2.367-7.379 4.309-9.075-15.071-1.712-30.917-7.537-30.917-33.546 0-7.408 2.646-13.466 6.987-18.212-.7-1.717-3.029-8.617.663-17.963 0 0 5.7-1.825 18.667 6.959 5.412-1.504 11.22-2.259 16.991-2.284 5.763.025 11.571.78 16.992 2.284 12.958-8.784 18.646-6.959 18.646-6.959 3.704 9.346 1.375 16.246.675 17.963 4.35 4.746 6.979 10.804 6.979 18.212 0 26.075-15.871 31.813-30.992 33.492 2.438 2.096 4.609 6.238 4.609 12.571 0 9.071-.084 16.392-.084 18.617 0 1.816 1.221 3.929 4.667 3.266 26.95-8.996 46.379-34.416 46.379-64.396C135.54 30.44 105.148.052 67.661.052"
                      ></path>
                    </g>
                  </svg>
                }
              />
            </a>
            <Text>
              Made with ❤️ by{" "}
              <Tooltip hasArrow label="Director of IT at HIRA">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.humzaa.dev"
                >
                  Humzaa Omar
                </a>
              </Tooltip>
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Logo />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
export { Info };
