import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Input,
  Button,
  Stack,
  InputGroup,
  createStandaloneToast,
  Flex,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import "./Logo.css";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { Info } from "./index";
const toast = createStandaloneToast();

class Logo extends React.PureComponent {
  state: any = {
    color: "#1b1b7a",
    text: "",
    height: {
      value: 512,
      isInvalid: false,
    },
    width: 317,
    bgColor: "white",
    svg: false,
    png: false,
    divStyle: {
      maxWidth: null,
      height: null,
      width: null,
    },
    boxStyle: {
      maxHeight: null,
      maxWidth: null,
      overflow: "clip",
    },
    fontSize: 33,
  };

  handleInput(type: string, input: any) {
    if (type === "text") {
      const text = input.target.value;
      const final = text.toUpperCase();
      this.setState({ text: final });
    }
    if (type === "height") {
      let str = input.target.value;
      let invalid: boolean = false;
      let num: number | any;
      if (str.includes("px")) {
        let temp = str.replace("px", "");
        if (isNaN(Number(temp))) invalid = true;
        num = Number(temp);
      } else if (!str.includes("px")) {
        let temp = str.replace("px", "");
        if (isNaN(Number(temp))) invalid = true;
        num = Number(temp);
      }
      let out = num + "px";
      this.setState({
        height: { value: out, isInvalid: invalid },
        width: num * 0.619140625,
      });
    }
    if (type === "color") {
      let data = input.target.value;
      this.setState({ color: data });
      switch (data) {
        case "#ffffff":
          this.setState({ bgColor: "#1b1b7a" });
          break;
        case "#fff":
          this.setState({ bgColor: "#1b1b7a" });
          break;
        case "white":
          this.setState({ bgColor: "#1b1b7a" });
          break;
        default:
          this.setState({ bgColor: "white" });
          break;
      }
    }
  }

  render() {
    return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={10}>
              <Box
                style={this.state.boxStyle}
                padding="16px"
                bg={this.state.bgColor}
                borderRadius="lg"
              >
                <div style={this.state.divStyle} id="artboard">
                  <Flex direction="column">
                    <svg
                      id="logoMain"
                      style={{
                        minHeight: "256px",
                        height: "auto",
                        width: "auto",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                      }}
                      version="1.1"
                      viewBox="0 0 1321 2134"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                    >
                      <rect
                        height="2133.33"
                        id="Artboard1"
                        style={{ fill: "none" }}
                        width="1320.83"
                        x="-0"
                        y="0"
                      />
                      <clipPath id="_clip1">
                        <rect height="2133.33" width="1320.83" x="-0" y="0" />
                      </clipPath>
                      <g clipPath="url(#_clip1)">
                        <g>
                          <path
                            style={{
                              fill: `${this.state.color}`,
                              fillRule: "nonzero",
                            }}
                            d="M889.008,875.802c-20.952,-48.924 -61.343,-150.066 -69.585,-171.584c-10.059,-26.268 -13.039,-39.495 -9.78,-41.823c3.262,-2.33 47.716,24.15 82.648,87.026c25.493,45.883 9.088,98.247 -3.283,126.381m322.84,211.527c-18.186,-49.23 -35.945,-96.545 -50.375,-135.516c-22.5,-60.765 -35.769,-95.294 -31.858,-99.205c3.913,-3.913 90.264,60.641 96.396,125.208c2.975,31.336 -1.415,67.513 -14.163,109.513m60.288,168.526c-12.713,-37.492 -27.449,-78.779 -42.539,-120.175c42.416,-65.707 64.984,-143.042 63.218,-216.811c-2.968,-124.072 -107.869,-171.055 -176.055,-252.096c-18.244,-21.684 -23.691,-50.496 -23.613,-69.724c0.14,-33.674 13.414,-54.912 0.327,-69.442c-125.194,191.516 -53.559,311.243 36.515,563.373c4.945,13.843 17.079,45.314 32.237,85.421c-7.464,17.254 -14.848,35.072 -26.183,59.335c13.009,-9.534 25.292,-19.923 36.841,-31.019c12.902,34.444 27.105,73.017 40.566,111.315c24.659,70.153 49.185,131.783 49.185,199.713c0,70.317 -64.834,160.965 -165.388,257.15c-124.389,118.988 -291.422,216.242 -437.233,216.242c-169.638,-0 -190.583,-152.783 -147.497,-328.904c21.033,-7.232 44.243,-11.467 69.933,-11.467c83.089,-0 97.994,55.331 186.674,55.331c94.455,0 148.184,-75.314 206.979,-152.208c58.446,-76.435 63.53,-98.461 92.593,-119.42c29.061,-20.958 44.101,-21.982 48.903,-27.664c2.48,-2.935 3.727,-5.876 6.078,-16.42c3.33,-14.928 7.699,-43.444 12.366,-99.133c-60.641,7.589 -179.688,30.506 -242.285,38.703c0,-0 55.052,-88.865 65.579,-164.316c10.124,-72.572 -29.973,-186.39 -53.127,-251.772c31.704,-51.418 103.312,-199.36 12.513,-304.524c-58.889,-68.207 -144.012,-110.198 -144.289,-175.59c-0.228,-53.098 11.736,-62.876 -0.56,-75.171c-84.674,120.163 -67.906,257.654 -16.488,395.702c22.199,59.599 52.298,138.662 79.886,213.44c-7.305,18.449 -16.592,42.816 -22.878,62.379l33.263,-34.095c25.209,68.999 47.021,131.534 56.716,167.727c6.898,25.749 3.024,45.535 -3.907,56.301c-32.751,50.866 -131.69,109.717 -138.609,127.244c-8.382,21.239 -25.913,75.368 -32.043,102.466c-5.594,24.726 8.384,22.355 16.209,21.798c7.824,-0.559 258.771,-42.105 258.771,-42.105c-16.301,61.76 -111.595,155.656 -208.844,155.656c-86.63,-0 -96.69,-56.915 -211.452,-56.915c-10.569,-0 -20.589,0.948 -30.167,2.647c10.628,-27.562 22.276,-54.931 34.638,-81.64c-18.42,24.78 -38.17,54.44 -56.974,87.258c-63.052,20.727 -105.024,77.241 -147.21,130.714c-52.911,67.07 -95.386,133.021 -181.459,133.021c-133.575,-0 -162.65,-157.808 -108.25,-296.787c152.022,-388.39 578.847,-698.807 578.847,-1093.02c0,-247.407 -152.021,-408.372 -152.021,-408.372c-57.382,288.396 -52.909,500.779 -52.909,500.779c47.227,3.631 70.995,-44.978 72.99,-86.569c1.676,-34.932 -14.027,-83.897 -14.305,-114.638c115.134,121.283 34.923,341.962 -89.239,543.256c-196.734,318.947 -438.367,585.171 -438.367,878.035c-0,171.397 96.69,225.24 154.259,225.24c71.258,-0 133.271,-51.165 178.29,-110.943c25.453,-33.799 64.445,-108.326 133.167,-152.216c-106.337,333.089 59.871,450.389 194.226,450.389c190.523,0 365.587,-140.686 484.134,-284.48c113.502,-137.68 176.614,-266.678 176.614,-369.436c-0,-78.061 -15.65,-126.312 -48.626,-223.562"
                          />
                          <path
                            style={{
                              fill: `${this.state.color}`,
                              fillRule: "nonzero",
                            }}
                            d="M415.617,1546.77c25.429,-11.179 34.652,-17.048 47.227,-34.094c12.575,-17.047 48.067,-78.805 48.067,-78.805c-0,0 -84.675,32.697 -148.95,32.697c-64.272,0 -110.383,-28.506 -101.999,-50.022c8.384,-21.518 51.141,-27.667 77.689,-27.667c20.119,0 27.572,2.982 40.798,2.982c13.227,0 23.846,-5.31 26.176,-18.723c2.328,-13.414 11.272,-92.476 11.691,-96.389c0.42,-3.911 -1.398,-7.825 -9.571,-7.825c-152.373,0 -224.749,137.84 -225.029,208.635c-0.164,41.624 25.228,63.296 65.602,64.6c30.32,0.977 52.326,-5.729 52.326,-5.729l-157.051,109.544c-0,0 247.595,-88.026 273.024,-99.204"
                          />
                          <path
                            style={{
                              fill: `${this.state.color}`,
                              fillRule: "nonzero",
                            }}
                            d="M757.2,1802.09c-40.614,16.581 -39.31,25.896 -65.484,78.898c0,-0 49.183,-22.355 55.469,-25.15c6.289,-2.795 11.459,-14.253 14.113,-18.724c2.655,-4.47 4.471,-6.008 11.319,-8.523c6.846,-2.515 174.936,-69.583 198.689,-79.642c23.754,-10.063 34.233,-30.043 48.906,-68.746c-0,0 -30.042,27.385 -57.987,39.123c-27.946,11.736 -164.411,66.183 -205.025,82.764"
                          />
                          <path
                            style={{
                              fill: `${this.state.color}`,
                              fillRule: "nonzero",
                            }}
                            d="M532.464,1094.22c6.845,-2.515 174.935,-69.582 198.689,-79.644c23.753,-10.06 34.233,-30.04 48.905,-68.743c0,-0 -30.042,27.385 -57.986,39.123c-27.947,11.735 -164.411,66.183 -205.025,82.764c-40.614,16.58 -39.311,25.896 -65.484,78.897c-0,0 49.183,-22.355 55.471,-25.149c6.286,-2.795 11.456,-14.253 14.111,-18.724c2.655,-4.473 4.473,-6.009 11.319,-8.524"
                          />
                          <path
                            style={{
                              fill: `${this.state.color}`,
                              fillRule: "nonzero",
                            }}
                            d="M497.376,981.518c-40.614,16.58 -39.311,25.896 -65.484,78.897c-0,0 49.183,-22.355 55.469,-25.149c6.288,-2.795 11.458,-14.253 14.113,-18.724c2.655,-4.47 4.471,-6.009 11.319,-8.524c6.845,-2.515 174.935,-69.582 198.689,-79.642c23.753,-10.062 34.233,-30.042 48.905,-68.745c0,-0 -30.042,27.385 -57.986,39.123c-27.947,11.735 -164.411,66.183 -205.025,82.764"
                          />
                        </g>
                      </g>
                    </svg>
                    <div
                      style={{
                        color: this.state.color,
                        fontFamily: "Garamond",
                        fontWeight: "normal",
                        fontSize: this.state.fontSize,
                        wordWrap: "initial",
                      }}
                      id="text"
                    >
                      {this.state.text}
                    </div>
                  </Flex>
                </div>
              </Box>
              <VStack>
                <Grid>
                  <Text fontSize="lg" textAlign="left">
                    Height
                  </Text>
                  <InputGroup>
                    <Input
                      isRequired
                      defaultValue="512px"
                      isInvalid={this.state.height.isInvalid}
                      placeholder="Height (Pixels)"
                      size="md"
                      onChange={(i) => this.handleInput("height", i)}
                    />
                  </InputGroup>
                </Grid>
                <Grid>
                  <Text fontSize="lg" textAlign="left">
                    Color
                  </Text>
                  <Input
                    isRequired
                    defaultValue="#1b1b7a"
                    placeholder="Color (#ffffff or white)"
                    size="md"
                    onChange={(i) => this.handleInput("color", i)}
                  />
                </Grid>
                <Grid>
                  <Text fontSize="lg" textAlign="left">
                    Caption
                  </Text>
                  <Input
                    disabled
                    maxLength={12}
                    isRequired
                    placeholder="Coming Soon"
                    size="md"
                    onChange={(i) => this.handleInput("text", i)}
                  />
                </Grid>
              </VStack>
              <Stack direction="row" spacing={4}>
                <Button
                  loadingText="Downloading"
                  colorScheme="teal"
                  variant="solid"
                  isLoading={this.state.png}
                  onClick={() => {
                    this.setState({
                      png: true,
                      divStyle: {
                        maxWidth: this.state.width,
                        height: this.state.height.value,
                        width: this.state.width,
                      },
                      fontSize: this.state.width / 4.803030303030303,
                    });
                    toast({
                      title: "Downloading....",
                      description: "Your download will start shortly",
                      status: "success",
                      duration: 5000,
                      position: "bottom-left",
                    });
                    // Downloading
                    console.log(this.state.height.value);
                    console.log(this.state.width);
                    domtoimage
                      //@ts-expect-error
                      .toPng(document.getElementById("artboard"))
                      .then((data) => {
                        saveAs(data, "HIRA.png");
                        this.setState({
                          png: false,
                          divStyle: {
                            maxWidth: 158.5,
                            height: null,
                            width: null,
                          },
                        });
                      })
                      .catch((error) => {
                        toast({
                          title: "an error has occured",
                          status: "error",
                          isClosable: true,
                        });
                        console.error(error);
                      });
                  }}
                >
                  Download
                </Button>
                <Button
                  loadingText="Downloading"
                  colorScheme="teal"
                  variant="outline"
                  isLoading={this.state.svg}
                  onClick={() => {
                    this.setState({
                      svg: true,
                      divStyle: {
                        maxWidth: null,
                        height: this.state.height.value,
                        width: this.state.width,
                      },
                    });

                    function filter(node: any) {
                      return node.tagName !== "i";
                    }
                    domtoimage
                      //@ts-expect-error
                      .toSvg(document.getElementById("artboard"), {
                        filter: filter,
                      })
                      .then((data) => {
                        saveAs(data, "HIRA.svg");
                        this.setState({
                          svg: false,
                          divStyle: {
                            maxWidth: 317,
                            height: null,
                            width: null,
                          },
                        });
                      })
                      .catch((error) => {
                        toast({
                          title: "an error has occured",
                          status: "error",
                          isClosable: true,
                        });
                        console.error(error);
                      });
                    toast({
                      title: "Downloading....",
                      description: "Your download will start shortly ",
                      status: "success",
                      duration: 5000,
                      position: "bottom-left",
                    });
                  }}
                >
                  SVG
                </Button>
              </Stack>
            </VStack>
            <Info />
          </Grid>
        </Box>
      </ChakraProvider>
    );
  }
}

export { Logo };
