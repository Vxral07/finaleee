import {
  AreaChart,
  ArrowDownUp,
  // Factory,
  Filter,
  Flag,
  // Search,
  SlidersHorizontal,
} from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import RadioGroup, { Radio } from "../ui/radio";
//   import { Input } from "../ui/input";
import { irisRegions, irisSectors } from "@/lib/iris-sectors";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { cn } from "@/lib/utils";
import { Cross1Icon, LockClosedIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { SparklesCore } from "../ui/sparkles";
// import nodemailer from "nodemailer"

interface Stock {
  IndustryMasterName: string;
  Name: string;
  NSECode: string;
  ISIN: string;
  ChangePer: number;
  CurrentMarketPriceNSE: number;
  NSEPriceAsOnDate: string;
  NSEPREVCLOSE: number;
  NSEPriceAsOnPrevDate: string;
  WeekHigh52: number;
  WeekLow52: number;
}

interface Sector {
  name: string;
  industryMasterName: string;
}

interface Error {
  error: string;
  status: boolean;
}

const Iris = () => {
  const navigate = useNavigate();

  const [isUserLogedIn, setIsUserLogedIn] = useState(false);
  const [showUserLoginModal, setShowUserLoginModal] = useState(false);
  const [showOTPSection, setShowOTPSection] = useState(false);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [region, setRegion] = useState("USA");
  const [exchange, setExchange] = useState(
    () => irisRegions.find((s) => s.name === region)?.exchanges[0]
  );
  const [searchKey, setSearchKey] = useState("");
  const [currencySymbol, setCurrencySymbol] = useState(
    region === "India" ? "₹" : "$"
  );

  const [isNameSorted, setIsNameSorted] = useState(1);
  const [isPriceSorted, setIsPriceSorted] = useState(1);

  const [error1, setError1] = useState<Error | null>(null);
  const otpMailer = async (to: string) => {
    const response = await axios({
      method: "post",
      url: "https://emailer-pro.up.railway.app/api/v1/mail/send/otp",
      data: {
        to,
        subject: "Your One-Time Password for IRIS – NUQI Wealth!",
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      setError1(err && err.response && err.response.data);
    });
    if (response && response.data && response.data.allreadySignup) {
      setShowUserLoginModal(false);
      setShowOTPSection(false);
      setIsUserLogedIn(true);
      await localStorage.setItem("isUserLogedIn", "true");
    } else if (response && response.data && response.data.hash) {
      return response.data.hash;
    }
    return null;
  };

  const [error2, setError2] = useState<Error | null>(null);
  const verifyMailedOTP = async (to: string, otp: string, hash: string) => {
    const response = await axios({
      method: "post",
      url: "https://emailer-pro.up.railway.app/api/v1/mail/verify/otp",
      data: {
        email: to,
        otp,
        hash,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
      setError2(err && err.response && err.response.data);
    });
    if (response && response.data && response.data.status) {
      return response.data.status;
    }
    return null;
  };

  const [email, setEmail] = useState("");
  const [otpHash, setOTPHash] = useState(``);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onSendOTP = async () => {
    const hash = await otpMailer(email);
    if (hash) {
      setOTPHash(hash);
      setShowUserLoginModal(false);
      setShowOTPSection(true);
    }
  };

  const [otp, setOTP] = useState("");
  const onVerifyOTP = async () => {
    const status = await verifyMailedOTP(email, otp, otpHash);
    if (status) {
      setShowOTPSection(false);
      setIsUserLogedIn(true);
      await localStorage.setItem("isUserLogedIn", "true");
    }
  };

  useEffect(() => {
    const isUserLogedIn = localStorage.getItem("isUserLogedIn");
    if (isUserLogedIn === "true") {
      setIsUserLogedIn(true);
    }
  }, []);

  const onReset = () => {
    setSectors([]);
    setRegion("India");
    setExchange(() => irisRegions.find((s) => s.name === region)?.exchanges[0]);
    setSearchKey("");
    fetchData();
  };

  const onApply = () => {
    const fetchSectorsData = async (sectors: Sector[]) => {
      console.log(sectors);
      if (region === "India") {
        setCurrencySymbol("₹");
      } else {
        setCurrencySymbol("$");
      }
      if (sectors.length === 0) {
        fetchData();
        return;
      }
      const selectedStocks: Stock[] = [];
      await Promise.all(
        sectors.map(async (s) => {
          let queryString = `https://api.nuqiwealth.in/GetSectorWiseStockDetails?sector=${s.industryMasterName}&nsccode=`;

          if (region === "USA") {
            queryString = `https://api.nuqiwealth.in/GetUSDSectorWiseStockDetails?sector=${s.industryMasterName}&exchange=${exchange}`;
          }

          const response = await fetch(queryString, {
            method: "GET",
          });

          const data = await response.json();
          selectedStocks.push(...data.Data.Table);
        })
      );
      setStocks(selectedStocks);
    };
    fetchSectorsData(sectors);
  };

  useEffect(() => {
    // setExchange(irisRegions.find((s) => s.name === region)?.exchanges[0]);
    onApply();
  }, [region, sectors]);

  const fetchData = async () => {
    if (region === "India") {
      const response = await fetch(
        `https://api.nuqiwealth.in/GetSectorWiseStockDetails?sector=&nsccode=`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setStocks(data.Data.Table);
    } else {
      const response = await fetch(
        `https://api.nuqiwealth.in/GetUSDSectorWiseStockDetails?sector=&exchange=${exchange}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setStocks(data.Data.Table);
    }
  };

  console.log(region, exchange);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchKey.length === 0) {
      fetchData();
      return;
    }
    setStocks((prev) =>
      prev.filter((p) => p.Name.toLowerCase().includes(searchKey.toLowerCase()))
    );
  }, [searchKey]);

  const sortByName = () => {
    if (isNameSorted % 3 === 0) {
      fetchData();
    } else if (isNameSorted % 3 === 1) {
      const sortedStocks = stocks.sort((a, b) => {
        return a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1;
      });
      setStocks([...sortedStocks]);
    } else {
      const sortedStocks = stocks.sort((a, b) => {
        return a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1;
      });
      setStocks([...sortedStocks]);
    }
    setIsNameSorted(isNameSorted + 1);
  };

  const sortByPrice = () => {
    if (isPriceSorted % 3 === 0) {
      fetchData();
    } else if (isPriceSorted % 3 === 1) {
      const sortedStocks = stocks.sort((a, b) => {
        return a.CurrentMarketPriceNSE > b.CurrentMarketPriceNSE ? -1 : 1;
      });
      setStocks([...sortedStocks]);
    } else {
      const sortedStocks = stocks.sort((a, b) => {
        return a.CurrentMarketPriceNSE > b.CurrentMarketPriceNSE ? 1 : -1;
      });
      setStocks([...sortedStocks]);
    }
    setIsPriceSorted(isPriceSorted + 1);
  };

  return (
    <section className="py-5 sm:py-16 lg:py-1">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl  font-bold leading-tight text-transparent text-cyan-400 sm:text-4xl lg:text-4xl">
            IRIS
          </h2>
          <div className="h-[10rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h2 className="text-3xl pb-5 font-bold leading-tight text-cyan-400 hover:text-cyan-400 sm:text-4xl lg:text-5xl">
                    IRIS
                </h2>
                <div className="w-[40rem] h-10 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#030F26"
                    />
                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-secondary text-white">
            Uncover Your Ethical Investing Journey: Explore Nuqi's Universe of
            4000+ Ethical Global & Indian Stocks | ETF's
          </p>
        </div>
      </div>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl text-left font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r text-cyan-400 sm:text-4xl lg:text-3xl sm:mr-0 mr-24 ">
            Trending Ethical Stocks
          </h2>
          <div className="border-2 border-cyan-400 bg-black shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] p-6 rounded-3xl w-full mt-4 hover:shadow-[0_0_20px_10px_rgba(0,255,255,0.7)] transition-shadow duration-300 ease-in-out">
            <h4 className="text-lg font-bold text-center leading-tight text-cyan-400 sm:text-2xl sm:center lg:text-xl mt-2  ml-7">
              Most Active
            </h4>
            <p className="max-w-2xl mx-auto mt-3 text-base leading-relaxed text-gray-300 text-center sm:text-lg lg:text-base px-4">
              Stay ahead of the market by tracking ethically aligned stocks with the highest trading volumes. Nuqi Wealth allows you to monitor global and local stocks that are actively traded while ensuring they meet ethical investment criteria.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  gap-4 p-4 bg-black rounded-lg shadow-md ml-10 mt-5">
        <div className="flex flex-wrap gap-4 w-full   sm:justify-start sm:flex-col md:flex-row lg:flex-row">
          <button className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-cyan-400 rounded-md shadow-sm hover:text-cyan-400 focus:outline-none text-center">
            <span>Most Active</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-md shadow-sm hover:text-cyan-400 focus:outline-none text-center">
            <span>Most Popular</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-md shadow-sm hover:text-cyan-400 focus:outline-none text-center">
            <span>Top Gainers</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-black rounded-md shadow-sm hover:text-cyan-400 focus:outline-none text-center">
            <span>Top Losers</span>
          </button>
        </div>
      </div>





      <div className="flex md:container py-10 w-full">
        <div className="hidden md:block">
        </div>
        <div className="w-full md:px-8 px-3">
          <div className="">
            <div className="mx-2 md:mx-10 mb-6 flex items-center gap-4">

              <Dialog >
                <DialogTrigger className=" md:hidden">
                  <SlidersHorizontal className="h-4 w-4 md:hidden" />
                </DialogTrigger>
                <DialogContent className="p-0 bg-black">
                  <>
                    <div className="flex flex-col border border-secondary/25 shadow-md rounded-md whitespace-nowrap max-h-min">
                      <div className="flex items-center gap-1 px-4 py-2">
                        <Filter className="h-4 w-4  text-white text-muted-foreground" />
                        <h2 className="text-xl ml-3 font-semibold tracking-wide  text-white">
                          Filter By
                        </h2>
                      </div>
                      <Separator className="bg-secondary/25 my-1" />
                      <div className="w-full bg-black ">
                        <Accordion type="single" collapsible className="w-full rounded-3xl">
                          <AccordionItem value="item-1" className="">
                            <AccordionTrigger className="px-1 py-2">
                              <div className="flex items-center gap-1 px-4 py-2">
                                <Flag className="h-4 w-4 text-white " />
                                <h2 className="text-lg ml-2 font-semibold text-white">
                                  Region
                                </h2>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-5 py-2">
                              <RadioGroup
                                onValueChange={(option) => setRegion(option)}
                                defaultValue={region}
                              >
                                <div className="flex flex-col gap-3 text-white">
                                  {irisRegions.map((r) => (
                                    <div
                                      className="flex items-center space-x-2"
                                      key={r.name}
                                    >
                                      <Radio id={r.name} value={r.name} />
                                      <label
                                        htmlFor={r.name}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                      >
                                        {r.name}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </RadioGroup>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-3">
                            <AccordionTrigger className="px-1 py-2">
                              <div className="flex items-center gap-1 px-4 py-2">
                                <AreaChart className="h-4 w-4  text-white text-muted-foreground" />
                                <h2 className="text-lg ml-2 font-semibold text-white">
                                  Sector
                                </h2>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-5 py-2">
                              <div className="flex flex-col gap-3 text-white">
                                {irisSectors.map((sector) => (
                                  <div
                                    className="flex items-center space-x-2"
                                    key={sector.industryMasterName}
                                  >
                                    <Checkbox
                                      id={sector.industryMasterName}
                                      checked={
                                        sectors.find(
                                          (s) =>
                                            s.industryMasterName ===
                                            sector.industryMasterName
                                        ) !== undefined
                                      }
                                      onCheckedChange={(state) => {
                                        if (!state) {
                                          setSectors(
                                            sectors.filter(
                                              (s) =>
                                                s.industryMasterName !==
                                                sector.industryMasterName
                                            )
                                          );
                                        } else {
                                          setSectors(sectors.concat(sector));
                                        }
                                      }}
                                    />
                                    <label
                                      htmlFor={sector.industryMasterName}
                                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      {sector.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-4 p-2">
                      <button
                        className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border text-white bg-cyan-400"
                        onClick={onReset}
                      >
                        Reset
                      </button>
                      <button
                        className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border text-white bg-cyan-400"
                        onClick={onApply}
                      >
                        Apply
                      </button>
                    </div>
                  </>
                </DialogContent>
              </Dialog>
            </div>

            <div className="rounded-md  flex flex-col border border-secondary/25 shadow-md text-white">
              <Table>
                <TableHeader >
                  <TableRow>
                    <TableHead className="cursor-pointer" onClick={sortByName}>
                      <div className="flex items-center my-3">
                        <p className="text-center text-lg text-cyan-400">Name</p>
                        <ArrowDownUp className="h-4 w-4 ml-1" />
                      </div>
                    </TableHead>
                    <TableHead onClick={sortByPrice} className="cursor-pointer">
                      <div className="flex items-center">
                        <p className="text-center text-lg text-cyan-400">Price</p>
                        <ArrowDownUp className="h-4 w-4 ml-1" />
                      </div>
                    </TableHead>
                    <TableHead className="text-center underline text-lg text-cyan-400">
                      52 Week High
                    </TableHead>
                    <TableHead className="text-center underline text-lg whitespace-nowrap text-cyan-400">
                      52 Week Low
                    </TableHead>

                    <TableHead className="text-center underline text-lg text-cyan-400">
                      Change
                    </TableHead>
                    <TableHead className="text-center text-lg text-cyan-400 ">
                      Compliance
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="w-full">
                  {stocks.map((s, index) =>
                    !isUserLogedIn && index > 2 ? (
                      <>
                        <TableRow key={s.Name} className="blur">
                          <TableCell className="font-normal md:font-medium">
                            {s.Name}
                          </TableCell>
                          <TableCell className="font-normal md:font-semibold whitespace-nowrap">
                            {currencySymbol}{" "}
                            {s.CurrentMarketPriceNSE.toLocaleString("en-GB")}
                          </TableCell>
                          <TableCell className="text-center whitespace-nowrap">
                            {currencySymbol}{" "}
                            {s.WeekHigh52.toLocaleString("en-GB")}
                          </TableCell>
                          <TableCell className="text-center whitespace-nowrap">
                            {currencySymbol}{" "}
                            {s.WeekLow52.toLocaleString("en-GB")}
                          </TableCell>
                          <TableCell
                            className={cn(
                              "text-right font-bold whitespace-nowrap",
                              {
                                "text-green-500": s.ChangePer > 0,
                                "text-red-500": s.ChangePer < 0,
                              }
                            )}
                          >
                            {s.ChangePer.toFixed(2)} %
                          </TableCell>
                          <TableCell>
                            <div className="text-center bg-green-200 rounded-md border-green-500 text-green-800 md:p-1 p-1">
                              Compliant
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          {/* <TableCell className="font-normal md:font-medium md:hidden md:px-8 px-3">
                            {!isUserLogedIn && index === 3 && (
                              <button
                                className="md:col-start-2 ml-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border bg-cyan-400 text-black"
                                onClick={() => setShowUserLoginModal(true)}
                              >
                                <LockClosedIcon className="mr-2 h-6 w-6" />
                                Sign-Up for free and unlock.
                              </button>
                            )}
                          </TableCell> */}
                          <TableCell className="font-normal md:font-medium md:hidden md:px-8 px-3">
                            {!isUserLogedIn && index === 3 && (
                              <button
                                className="md:col-start-2 ml-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border bg-cyan-400 text-black text-sm md:text-base mx-auto"
                                onClick={() => setShowUserLoginModal(true)}
                              >
                                <LockClosedIcon className="mr-2 h-6 w-6" />
                                <span className="truncate max-w-full">Sign-Up for free and unlock.</span>
                              </button>
                            )}
                          </TableCell>

                          <TableCell className="font-normal md:font-semibold whitespace-nowrap"></TableCell>
                          <TableCell className="text-center whitespace-nowrap"></TableCell>
                          <TableCell className="text-center whitespace-nowrap hidden md:block">
                            {!isUserLogedIn && index === 3 && (
                              <button
                                className="md:col-start-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border bg-cyan-400 w-full text-black"
                                onClick={() => setShowUserLoginModal(true)}
                              >
                                <LockClosedIcon className="mr-2 h-6 w-6" />
                                Sign-Up for free and unlock.
                              </button>
                            )}
                          </TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </>
                    ) : (
                      <TableRow
                        key={s.Name}
                        className="cursor-pointer"
                        onClick={() => {
                          if (region === "India") {
                            navigate(`/stock?symbol=BSE:${s.NSECode}`);
                          } else {
                            navigate(`/stock?symbol=${exchange}:${s.NSECode}`);
                          }
                        }}
                      >
                        <TableCell className="font-normal md:font-medium">
                          {s.Name}
                        </TableCell>
                        <TableCell className="font-normal md:font-semibold whitespace-nowrap">
                          {currencySymbol}{" "}
                          {s.CurrentMarketPriceNSE.toLocaleString("en-GB")}
                        </TableCell>
                        <TableCell className="text-center whitespace-nowrap">
                          {currencySymbol}{" "}
                          {s.WeekHigh52.toLocaleString("en-GB")}
                        </TableCell>
                        <TableCell className="text-center whitespace-nowrap">
                          {currencySymbol} {s.WeekLow52.toLocaleString("en-GB")}
                        </TableCell>
                        <TableCell
                          className={cn(
                            "w-10 text-right text-lg font-bold whitespace-nowrap",
                            {
                              "text-green-500": s.ChangePer > 0,
                              "text-red-500": s.ChangePer < 0,
                            }
                          )}
                        >
                          {s.ChangePer.toFixed(2)} %
                        </TableCell>
                        <TableCell>
                          <div className="text-center text-lg bg-green-200 rounded-md border-green-500 text-green-800 md:p-1 p-2 my-2">
                            Ethical
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
              {stocks.length === 0 && (
                <div className="text-center w-full flex justify-center font-semibold text-lg p-4">
                  No matching stocks available. Try out different filters!
                </div>
              )}
            </div>


          </div>
        </div>
      </div>


      {showUserLoginModal && (
        // <div className="fixed inset-0 bg-black bg-opacity-75 z-10 flex justify-center items-center">
        //   <div className="relative w-[320px] bg-black shadow-[0px_187px_75px_rgba(0,0,0,0.01),0px_105px_63px_rgba(0,0,0,0.05),0px_47px_47px_rgba(0,0,0,0.09),0px_12px_26px_rgba(0,0,0,0.1),0px_0px_0px_rgba(0,0,0,0.1)] rounded-xl p-5">
        //     <button
        //       className="absolute top-2 right-2 text-white "
        //       onClick={() => {
        //         setShowUserLoginModal(false);
        //         setError2(null);
        //         setError1(null);
        //       }}
        //     >
        //       <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        //       </svg>
        //     </button>
        //     <form className="flex flex-col items-start gap-5 ">
        //       <div className="flex items-center justify-center w-15 h-15 bg-[#ECF1FD] shadow-[0px_0.5px_0.5px_#EFEFEF,0px_1px_0.5px_rgba(239,239,239,0.5)] rounded-sm">
        //         {/* Replace with actual icon */}
        //         <LockClosedIcon className="mb-2 h-10 w-10 text-white" />
        //       </div>
        //       <div className="flex flex-col gap-2">
        //         <label className="font-normal  text-lg leading-6 text-white">Subscribe for updates</label>
        //         <span className=" font-semibold text-xs leading-5 text-white">Subscribe to this weekly newsletter so you don’t miss out on the new hot tech topics.</span>
        //       </div>
        //       {error1 && error1.error && (
        //         <p className="text-red-500 text-sm mb-2 font-medium">{error1.error}</p>
        //       )}
        //       <div className="inputGroup w-72 text-white">
        //         <input
        //           autoComplete="off"
        //           required
        //           type="text"
        //           id="name"
        //           value={name}
        //           onChange={(e) => setName(e.target.value)}
        //         />
        //         <label htmlFor="name">Name</label>
        //       </div>

        //       <div className="inputGroup w-72">
        //         <input
        //           autoComplete="off"
        //           required
        //           type="email"
        //           id="name"
        //           value={name}
        //           onChange={(e) => setEmail(e.target.value)}
        //         />
        //         <label htmlFor="email">Email:</label>
        //       </div>

        //       <div className="w-72 relative">
        //         <div className="flex border-2 border-[rgb(200, 200, 200)] rounded-3xl relative">
        //           <span className="flex items-center border-r border-[rgb(200, 200, 200)] px-3">
        //             +971
        //           </span>
        //           <input
        //             type="tel"
        //             id="tel"
        //             className="w-full px-4 py-[11px] border-none outline-none bg-transparent rounded-e-xl peer"
        //             onChange={(e) => setNumber(e.target.value)}
        //             value={number}
        //           />
        //           <label
        //             htmlFor="tel"
        //             className="absolute left-16 top-[0.5rem] transform -translate-y-[-8%] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-[1.2rem] bg-white px-1"
        //           >
        //             Phone number
        //           </label>
        //         </div>
        //       </div>
        //       <button
        //         className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-full h-10 bg-gradient-to-b bg-cyan-400  shadow-sm rounded-3xl border-0 font-semibold text-xs text-white"
        //         type="submit"
        //         onClick={onSendOTP}
        //       >
        //         Submit
        //       </button>
        //     </form>
        //   </div>
        // </div>
        <div className="fixed inset-0 bg-black bg-opacity-75 z-10 flex justify-center items-center">
          <div className="relative w-[320px] bg-black shadow-[0px_187px_75px_rgba(0,0,0,0.01),0px_105px_63px_rgba(0,0,0,0.05),0px_47px_47px_rgba(0,0,0,0.09),0px_12px_26px_rgba(0,0,0,0.1),0px_0px_0px_rgba(0,0,0,0.1)] rounded-xl p-4 text-white">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => {
                setShowUserLoginModal(false);
                setError2(null);
                setError1(null);
              }}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <form className="flex flex-col items-start gap-3">
              <div className="flex items-center justify-center w-15 h-15   rounded-sm">
                {/* Replace with actual icon */}
                <LockClosedIcon className="mb-2 h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-normal text-xs leading-4 text-white">Subscribe for updates</label>
                <span className="font-semibold text-xs leading-3 text-white">
                  Subscribe to this weekly newsletter so you don’t miss out on the new hot tech topics.
                </span>
              </div>
              {error1 && error1.error && (
                <p className="text-red-500 text-xs mb-2 font-medium">{error1.error}</p>
              )}
              <div className="inputGroup w-72">
                <input
                  autoComplete="off"
                  required
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full px-4 py-[11px] border-2 border-[rgb(200, 200, 200)] rounded-3xl bg-transparent text-white placeholder:text-gray-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div className="inputGroup w-72">
                <input
                  autoComplete="off"
                  required
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-[11px] border-2 border-[rgb(200, 200, 200)] rounded-3xl bg-transparent text-white placeholder:text-gray-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div className="w-72 relative">
                <div className="flex border-2 border-[rgb(200, 200, 200)] rounded-3xl relative">
                  <span className="flex items-center border-r border-[rgb(200, 200, 200)] px-3 text-white text-xs">
                    +971
                  </span>
                  <input
                    type="tel"
                    id="tel"
                    className="w-full px-4 py-[11px] border-none outline-none bg-transparent rounded-e-xl peer text-white placeholder:text-gray-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <button
                className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-full h-10 bg-gradient-to-b from-cyan-400 to-cyan-500 shadow-sm rounded-3xl border-0 font-semibold text-xs text-white"
                type="submit"
                onClick={onSendOTP}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

      )}



      {showOTPSection && (
        <div className="static">
          <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75 "></div>
          {/** Just added */}
          <div className="fixed h-screen top-0 right-0 left-0 z-20 flex justify-center items-center">
            <div className="mx-4 my-4 bg-slate-200 p-7 rounded-xl  py-2 md:py-6 md:px-8 flex flex-col gap-8 border border-secondary/25 shadow-md">
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setShowOTPSection(false);
                    setError2(null);
                    setError1(null);
                  }}
                >
                  <Cross1Icon className="mb-2 h-5 w-5" />
                </button>
              </div>
              <div className="w-full justify-center items-center">
                <LockClosedIcon className="mb-2 h-10 w-10" />
                <h1 className="text-black text-xl font-medium ">
                  Verify OTP to Unlock
                </h1>
                <p className="text-black mb-5 text-sm">
                  Last step to unlock all list.
                </p>
                {error2 && error2.error && (
                  <p className="text-red-500 text-sm mb-2 font-medium ">
                    {error2.error}
                  </p>
                )}
                <input
                  type="text"
                  onChange={(e) => setOTP(e.target.value)}
                  placeholder="OTP"
                  className="border-2 border-slate-500 rounded-md p-2 w-full "
                />
                <button
                  className="md:col-start-2 self-center mt-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
                  onClick={onVerifyOTP}
                >
                  Verify OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Iris;





































// import {
//   AreaChart,
//   ArrowDownUp,
//   // Factory,
//   Filter,
//   Flag,
//   // Search,
//   SlidersHorizontal,
// } from "lucide-react";
// import { Checkbox } from "../ui/checkbox";
// import RadioGroup, { Radio } from "../ui/radio";
// //   import { Input } from "../ui/input";
// import { irisRegions, irisSectors } from "@/lib/iris-sectors";
// import { useEffect, useState } from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../ui/accordion";
// import { Separator } from "../ui/separator";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";

// import { cn } from "@/lib/utils";
// import { Cross1Icon, LockClosedIcon } from "@radix-ui/react-icons";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
// // import nodemailer from "nodemailer"

// interface Stock {
//   IndustryMasterName: string;
//   Name: string;
//   NSECode: string;
//   ISIN: string;
//   ChangePer: number;
//   CurrentMarketPriceNSE: number;
//   NSEPriceAsOnDate: string;
//   NSEPREVCLOSE: number;
//   NSEPriceAsOnPrevDate: string;
//   WeekHigh52: number;
//   WeekLow52: number;
// }

// interface Sector {
//   name: string;
//   industryMasterName: string;
// }

// interface Error {
//   error: string;
//   status: boolean;
// }

// const Iris = () => {
//   const navigate = useNavigate();

//   const [isUserLogedIn, setIsUserLogedIn] = useState(false);
//   const [showUserLoginModal, setShowUserLoginModal] = useState(false);
//   const [showOTPSection, setShowOTPSection] = useState(false);
//   const [sectors, setSectors] = useState<Sector[]>([]);
//   const [stocks, setStocks] = useState<Stock[]>([]);
//   const [region, setRegion] = useState("USA");
//   const [exchange, setExchange] = useState(
//     () => irisRegions.find((s) => s.name === region)?.exchanges[0]
//   );
//   const [searchKey, setSearchKey] = useState("");
//   const [currencySymbol, setCurrencySymbol] = useState(
//     region === "India" ? "₹" : "$"
//   );

//   const [isNameSorted, setIsNameSorted] = useState(1);
//   const [isPriceSorted, setIsPriceSorted] = useState(1);

//   const [error1, setError1] = useState<Error | null>(null);
//   const otpMailer = async (to: string) => {
//     const response = await axios({
//       method: "post",
//       url: "https://emailer-pro.up.railway.app/api/v1/mail/send/otp",
//       data: {
//         to,
//         subject: "Your One-Time Password for IRIS – NUQI Wealth!",
//       },
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).catch((err) => {
//       setError1(err && err.response && err.response.data);
//     });
//     if (response && response.data && response.data.allreadySignup) {
//       setShowUserLoginModal(false);
//       setShowOTPSection(false);
//       setIsUserLogedIn(true);
//       await localStorage.setItem("isUserLogedIn", "true");
//     } else if (response && response.data && response.data.hash) {
//       return response.data.hash;
//     }
//     return null;
//   };

//   const [error2, setError2] = useState<Error | null>(null);
//   const verifyMailedOTP = async (to: string, otp: string, hash: string) => {
//     const response = await axios({
//       method: "post",
//       url: "https://emailer-pro.up.railway.app/api/v1/mail/verify/otp",
//       data: {
//         email: to,
//         otp,
//         hash,
//       },
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).catch((err) => {
//       console.log(err);
//       setError2(err && err.response && err.response.data);
//     });
//     if (response && response.data && response.data.status) {
//       return response.data.status;
//     }
//     return null;
//   };

//   const [email, setEmail] = useState("");
//   const [otpHash, setOTPHash] = useState(``);
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const onSendOTP = async () => {
//     const hash = await otpMailer(email);
//     if (hash) {
//       setOTPHash(hash);
//       setShowUserLoginModal(false);
//       setShowOTPSection(true);
//     }
//   };

//   const [otp, setOTP] = useState("");
//   const onVerifyOTP = async () => {
//     const status = await verifyMailedOTP(email, otp, otpHash);
//     if (status) {
//       setShowOTPSection(false);
//       setIsUserLogedIn(true);
//       await localStorage.setItem("isUserLogedIn", "true");
//     }
//   };

//   useEffect(() => {
//     const isUserLogedIn = localStorage.getItem("isUserLogedIn");
//     if (isUserLogedIn === "true") {
//       setIsUserLogedIn(true);
//     }
//   }, []);

//   const onReset = () => {
//     setSectors([]);
//     setRegion("India");
//     setExchange(() => irisRegions.find((s) => s.name === region)?.exchanges[0]);
//     setSearchKey("");
//     fetchData();
//   };

//   const onApply = () => {
//     const fetchSectorsData = async (sectors: Sector[]) => {
//       console.log(sectors);
//       if (region === "India") {
//         setCurrencySymbol("₹");
//       } else {
//         setCurrencySymbol("$");
//       }
//       if (sectors.length === 0) {
//         fetchData();
//         return;
//       }
//       const selectedStocks: Stock[] = [];
//       await Promise.all(
//         sectors.map(async (s) => {
//           let queryString = `https://api.nuqiwealth.in/GetSectorWiseStockDetails?sector=${s.industryMasterName}&nsccode=`;

//           if (region === "USA") {
//             queryString = `https://api.nuqiwealth.in/GetUSDSectorWiseStockDetails?sector=${s.industryMasterName}&exchange=${exchange}`;
//           }

//           const response = await fetch(queryString, {
//             method: "GET",
//           });

//           const data = await response.json();
//           selectedStocks.push(...data.Data.Table);
//         })
//       );
//       setStocks(selectedStocks);
//     };
//     fetchSectorsData(sectors);
//   };

//   useEffect(() => {
//     // setExchange(irisRegions.find((s) => s.name === region)?.exchanges[0]);
//     onApply();
//   }, [region, sectors]);

//   const fetchData = async () => {
//     if (region === "India") {
//       const response = await fetch(
//         `https://api.nuqiwealth.in/GetSectorWiseStockDetails?sector=&nsccode=`,
//         {
//           method: "GET",
//         }
//       );

//       const data = await response.json();
//       setStocks(data.Data.Table);
//     } else {
//       const response = await fetch(
//         `https://api.nuqiwealth.in/GetUSDSectorWiseStockDetails?sector=&exchange=${exchange}`,
//         {
//           method: "GET",
//         }
//       );

//       const data = await response.json();
//       setStocks(data.Data.Table);
//     }
//   };

//   console.log(region, exchange);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (searchKey.length === 0) {
//       fetchData();
//       return;
//     }
//     setStocks((prev) =>
//       prev.filter((p) => p.Name.toLowerCase().includes(searchKey.toLowerCase()))
//     );
//   }, [searchKey]);

//   const sortByName = () => {
//     if (isNameSorted % 3 === 0) {
//       fetchData();
//     } else if (isNameSorted % 3 === 1) {
//       const sortedStocks = stocks.sort((a, b) => {
//         return a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1;
//       });
//       setStocks([...sortedStocks]);
//     } else {
//       const sortedStocks = stocks.sort((a, b) => {
//         return a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1;
//       });
//       setStocks([...sortedStocks]);
//     }
//     setIsNameSorted(isNameSorted + 1);
//   };

//   const sortByPrice = () => {
//     if (isPriceSorted % 3 === 0) {
//       fetchData();
//     } else if (isPriceSorted % 3 === 1) {
//       const sortedStocks = stocks.sort((a, b) => {
//         return a.CurrentMarketPriceNSE > b.CurrentMarketPriceNSE ? -1 : 1;
//       });
//       setStocks([...sortedStocks]);
//     } else {
//       const sortedStocks = stocks.sort((a, b) => {
//         return a.CurrentMarketPriceNSE > b.CurrentMarketPriceNSE ? 1 : -1;
//       });
//       setStocks([...sortedStocks]);
//     }
//     setIsPriceSorted(isPriceSorted + 1);
//   };

//   return (
//     <section className="py-5 sm:py-16 lg:py-1">
//       <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-bold leading-tight text-transparent text-cyan-400 sm:text-4xl lg:text-4xl">
//             IRIS
//           </h2>
//           <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-secondary text-white">
//             Uncover Your Ethical Investing Journey: Explore Nuqi's Universe of
//             4000+ Ethical Global & Indian Stocks | ETF's
//           </p>
//         </div>
//       </div>
//       <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-xl text-left font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r text-cyan-400 sm:text-4xl lg:text-3xl sm:mr-0 mr-24 ">
//             Trending Ethical Stocks
//           </h2>
//           <div className="border-2 border-cyan-400 bg-black shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] p-6 rounded-3xl w-full mt-4 hover:shadow-[0_0_20px_10px_rgba(0,255,255,0.7)] transition-shadow duration-300 ease-in-out">
//             <h4 className="text-lg font-bold leading-tight text-cyan-400 sm:text-2xl lg:text-xl mt-2 text-left ml-7">
//               Most Active
//             </h4>
//             <p className="max-w-2xl mx-auto mt-3 text-base leading-relaxed text-gray-300 text-center sm:text-lg lg:text-base px-4">
//               Stay ahead of the market by tracking ethically aligned stocks with the highest trading volumes. Nuqi Wealth allows you to monitor global and local stocks that are actively traded while ensuring they meet ethical investment criteria.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-8 p-4 bg-black rounded-lg shadow-md ml-20 mt-5">
//         <div className="flex flex-wrap gap-8 w-full justify-center sm:justify-start sm:flex-col lg:flex-row">
//           <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-cyan-400 rounded-md shadow-sm hover:bg-cyan-400 hover:text-black focus:outline-none text-center">
//             <span>Most Active</span>
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-md shadow-sm hover:bg-cyan-400 hover:text-black focus:outline-none text-center">
//             <span>Most Popular</span>
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-md shadow-sm hover:bg-cyan-400 hover:text-black focus:outline-none text-center">
//             <span>Top Gainers</span>
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-md shadow-sm hover:bg-cyan-400 hover:text-black focus:outline-none text-center">
//             <span>Top Losers</span>
//           </button>
//         </div>
//       </div>

//       <div className="flex md:container py-10 w-full">
//         <div className="hidden md:block">
//         </div>
//         <div className="w-full md:px-8 px-3">
//           <div className="">
//             <div className="mx-2 md:mx-10 mb-6 flex items-center gap-4">

//               <Dialog >
//                 <DialogTrigger className=" md:hidden">
//                   <SlidersHorizontal className="h-4 w-4 md:hidden" />
//                 </DialogTrigger>
//                 <DialogContent className="p-0">
//                   <>
//                     <div className="flex flex-col border border-secondary/25 shadow-md rounded-md whitespace-nowrap max-h-min">
//                       <div className="flex items-center gap-1 px-4 py-2">
//                         <Filter className="h-4 w-4 text-muted-foreground" />
//                         <h2 className="text-xl font-semibold tracking-wide">
//                           Filter By
//                         </h2>
//                       </div>
//                       <Separator className="bg-secondary/25 my-1" />
//                       <div className="w-full ">
//                         <Accordion type="single" collapsible className="w-full">
//                           <AccordionItem value="item-1" className="">
//                             <AccordionTrigger className="px-1 py-2">
//                               <div className="flex items-center gap-1 px-4 py-2">
//                                 <Flag className="h-4 w-4 text-muted-foreground" />
//                                 <h2 className="text-lg font-semibold">
//                                   Region
//                                 </h2>
//                               </div>
//                             </AccordionTrigger>
//                             <AccordionContent className="px-5 py-2">
//                               <RadioGroup
//                                 onValueChange={(option) => setRegion(option)}
//                                 defaultValue={region}
//                               >
//                                 <div className="flex flex-col gap-3">
//                                   {irisRegions.map((r) => (
//                                     <div
//                                       className="flex items-center space-x-2"
//                                       key={r.name}
//                                     >
//                                       <Radio id={r.name} value={r.name} />
//                                       <label
//                                         htmlFor={r.name}
//                                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                                       >
//                                         {r.name}
//                                       </label>
//                                     </div>
//                                   ))}
//                                 </div>
//                               </RadioGroup>
//                             </AccordionContent>
//                           </AccordionItem>

//                           <AccordionItem value="item-3">
//                             <AccordionTrigger className="px-1 py-2">
//                               <div className="flex items-center gap-1 px-4 py-2">
//                                 <AreaChart className="h-4 w-4 text-muted-foreground" />
//                                 <h2 className="text-lg font-semibold">
//                                   Sector
//                                 </h2>
//                               </div>
//                             </AccordionTrigger>
//                             <AccordionContent className="px-5 py-2">
//                               <div className="flex flex-col gap-3">
//                                 {irisSectors.map((sector) => (
//                                   <div
//                                     className="flex items-center space-x-2"
//                                     key={sector.industryMasterName}
//                                   >
//                                     <Checkbox
//                                       id={sector.industryMasterName}
//                                       checked={
//                                         sectors.find(
//                                           (s) =>
//                                             s.industryMasterName ===
//                                             sector.industryMasterName
//                                         ) !== undefined
//                                       }
//                                       onCheckedChange={(state) => {
//                                         if (!state) {
//                                           setSectors(
//                                             sectors.filter(
//                                               (s) =>
//                                                 s.industryMasterName !==
//                                                 sector.industryMasterName
//                                             )
//                                           );
//                                         } else {
//                                           setSectors(sectors.concat(sector));
//                                         }
//                                       }}
//                                     />
//                                     <label
//                                       htmlFor={sector.industryMasterName}
//                                       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                                     >
//                                       {sector.name}
//                                     </label>
//                                   </div>
//                                 ))}
//                               </div>
//                             </AccordionContent>
//                           </AccordionItem>
//                         </Accordion>
//                       </div>
//                     </div>
//                     <div className="flex w-full items-center gap-4 p-2">
//                       <button
//                         className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
//                         onClick={onReset}
//                       >
//                         Reset
//                       </button>
//                       <button
//                         className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
//                         onClick={onApply}
//                       >
//                         Apply
//                       </button>
//                     </div>
//                   </>
//                 </DialogContent>
//               </Dialog>
//             </div>

//             <div className="rounded-md  flex flex-col border border-secondary/25 shadow-md text-white">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="cursor-pointer" onClick={sortByName}>
//                       <div className="flex items-center my-3">
//                         <p className="text-center text-lg">Name</p>
//                         <ArrowDownUp className="h-4 w-4 ml-1" />
//                       </div>
//                     </TableHead>
//                     <TableHead onClick={sortByPrice} className="cursor-pointer">
//                       <div className="flex items-center">
//                         <p className="text-center text-lg">Price</p>
//                         <ArrowDownUp className="h-4 w-4 ml-1" />
//                       </div>
//                     </TableHead>
//                     <TableHead className="text-center underline text-lg">
//                       52 Week High
//                     </TableHead>
//                     <TableHead className="text-center underline text-lg whitespace-nowrap">
//                       52 Week Low
//                     </TableHead>

//                     <TableHead className="text-center underline text-lg">
//                       Change
//                     </TableHead>
//                     <TableHead className="text-center text-lg ">
//                       Compliance
//                     </TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody className="w-full">
//                   {stocks.map((s, index) =>
//                     !isUserLogedIn && index > 2 ? (
//                       <>
//                         <TableRow key={s.Name} className="blur">
//                           <TableCell className="font-normal md:font-medium">
//                             {s.Name}
//                           </TableCell>
//                           <TableCell className="font-normal md:font-semibold whitespace-nowrap">
//                             {currencySymbol}{" "}
//                             {s.CurrentMarketPriceNSE.toLocaleString("en-GB")}
//                           </TableCell>
//                           <TableCell className="text-center whitespace-nowrap">
//                             {currencySymbol}{" "}
//                             {s.WeekHigh52.toLocaleString("en-GB")}
//                           </TableCell>
//                           <TableCell className="text-center whitespace-nowrap">
//                             {currencySymbol}{" "}
//                             {s.WeekLow52.toLocaleString("en-GB")}
//                           </TableCell>
//                           <TableCell
//                             className={cn(
//                               "text-right font-bold whitespace-nowrap",
//                               {
//                                 "text-green-500": s.ChangePer > 0,
//                                 "text-red-500": s.ChangePer < 0,
//                               }
//                             )}
//                           >
//                             {s.ChangePer.toFixed(2)} %
//                           </TableCell>
//                           <TableCell>
//                             <div className="text-center bg-green-200 rounded-md border-green-500 text-green-800 md:p-1 p-1">
//                               Compliant
//                             </div>
//                           </TableCell>
//                         </TableRow>
//                         <TableRow>
//                           <TableCell className="font-normal md:font-medium md:hidden md:px-8 px-3">
//                             {!isUserLogedIn && index === 3 && (
//                               <button
//                                 className="md:col-start-2 ml-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
//                                 onClick={() => setShowUserLoginModal(true)}
//                               >
//                                 <LockClosedIcon className="mr-2 h-6 w-6" />
//                                 Sign-Up for free and unlock.
//                               </button>
//                             )}
//                           </TableCell>
//                           <TableCell className="font-normal md:font-semibold whitespace-nowrap"></TableCell>
//                           <TableCell className="text-center whitespace-nowrap"></TableCell>
//                           <TableCell className="text-center whitespace-nowrap hidden md:block">
//                             {!isUserLogedIn && index === 3 && (
//                               <button
//                                 className="md:col-start-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
//                                 onClick={() => setShowUserLoginModal(true)}
//                               >
//                                 <LockClosedIcon className="mr-2 h-6 w-6" />
//                                 Sign-Up for free and unlock.
//                               </button>
//                             )}
//                           </TableCell>
//                           <TableCell></TableCell>
//                           <TableCell></TableCell>
//                         </TableRow>
//                       </>
//                     ) : (
//                       <TableRow
//                         key={s.Name}
//                         className="cursor-pointer"
//                         onClick={() => {
//                           if (region === "India") {
//                             navigate(`/stock?symbol=BSE:${s.NSECode}`);
//                           } else {
//                             navigate(`/stock?symbol=${exchange}:${s.NSECode}`);
//                           }
//                         }}
//                       >
//                         <TableCell className="font-normal md:font-medium">
//                           {s.Name}
//                         </TableCell>
//                         <TableCell className="font-normal md:font-semibold whitespace-nowrap">
//                           {currencySymbol}{" "}
//                           {s.CurrentMarketPriceNSE.toLocaleString("en-GB")}
//                         </TableCell>
//                         <TableCell className="text-center whitespace-nowrap">
//                           {currencySymbol}{" "}
//                           {s.WeekHigh52.toLocaleString("en-GB")}
//                         </TableCell>
//                         <TableCell className="text-center whitespace-nowrap">
//                           {currencySymbol} {s.WeekLow52.toLocaleString("en-GB")}
//                         </TableCell>
//                         <TableCell
//                           className={cn(
//                             "w-10 text-right text-lg font-bold whitespace-nowrap",
//                             {
//                               "text-green-500": s.ChangePer > 0,
//                               "text-red-500": s.ChangePer < 0,
//                             }
//                           )}
//                         >
//                           {s.ChangePer.toFixed(2)} %
//                         </TableCell>
//                         <TableCell>
//                           <div className="text-center text-lg bg-green-200 rounded-md border-green-500 text-green-800 md:p-1 p-2 my-2">
//                             Ethical
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     )
//                   )}
//                 </TableBody>
//               </Table>
//               {stocks.length === 0 && (
//                 <div className="text-center w-full flex justify-center font-semibold text-lg p-4">
//                   No matching stocks available. Try out different filters!
//                 </div>
//               )}
//             </div>


//           </div>
//         </div>
//       </div>
   

//       {showUserLoginModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 z-10 flex justify-center items-center">
//           <div className="relative w-[320px] bg-white shadow-[0px_187px_75px_rgba(0,0,0,0.01),0px_105px_63px_rgba(0,0,0,0.05),0px_47px_47px_rgba(0,0,0,0.09),0px_12px_26px_rgba(0,0,0,0.1),0px_0px_0px_rgba(0,0,0,0.1)] rounded-xl p-5">
//             <button
//               className="absolute top-2 right-2 text-gray-500 "
//               onClick={() => {
//                 setShowUserLoginModal(false);
//                 setError2(null);
//                 setError1(null);
//               }}
//             >
//               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             </button>
//             <form className="flex flex-col items-start gap-5">
//               <div className="flex items-center justify-center w-15 h-15 bg-[#ECF1FD] shadow-[0px_0.5px_0.5px_#EFEFEF,0px_1px_0.5px_rgba(239,239,239,0.5)] rounded-sm">
//                 {/* Replace with actual icon */}
//                 <LockClosedIcon className="mb-2 h-10 w-10 text-[#2B2B2F]" />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="font-normal  text-lg leading-6 text-[#2B2B2F]">Subscribe for updates</label>
//                 <span className=" font-semibold text-xs leading-5 text-[#5F5D6B]">Subscribe to this weekly newsletter so you don’t miss out on the new hot tech topics.</span>
//               </div>
//               {error1 && error1.error && (
//                 <p className="text-red-500 text-sm mb-2 font-medium">{error1.error}</p>
//               )}
//               <div className="inputGroup w-72">
//                 <input
//                   autoComplete="off"
//                   required
//                   type="text"
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <label htmlFor="name">Name</label>
//               </div>

//               <div className="inputGroup w-72">
//                 <input
//                   autoComplete="off"
//                   required
//                   type="email"
//                   id="name"
//                   value={name}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label htmlFor="email">Email</label>
//               </div>

//               <div className="w-72 relative">
//                 <div className="flex border-2 border-[rgb(200, 200, 200)] rounded-3xl relative">
//                   <span className="flex items-center border-r border-[rgb(200, 200, 200)] px-3">
//                     +971
//                   </span>
//                   <input
//                     type="tel"
//                     id="tel"
//                     className="w-full px-4 py-[11px] border-none outline-none bg-transparent rounded-e-xl peer"
//                     onChange={(e) => setNumber(e.target.value)}
//                     value={number}
//                   />
//                   <label
//                     htmlFor="tel"
//                     className="absolute left-16 top-[0.5rem] transform -translate-y-[-8%] text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-[1.2rem] bg-white px-1"
//                   >
//                     Phone number
//                   </label>
//                 </div>
//               </div>
//               <button
//                 className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-full h-10 bg-gradient-to-b from-[#000] via-[#000] to-[#000] shadow-sm rounded-sm border-0 font-semibold text-xs text-white"
//                 type="submit"
//                 onClick={onSendOTP}
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}



//       {showOTPSection && (
//         <div className="static">
//           <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75 "></div>
//           {/** Just added */}
//           <div className="fixed h-screen top-0 right-0 left-0 z-20 flex justify-center items-center">
//             <div className="mx-4 my-4 bg-slate-200 p-7  rounded-md py-2 md:py-6 md:px-8 flex flex-col gap-8 border border-secondary/25 shadow-md">
//               <div className="flex justify-end">
//                 <button
//                   onClick={() => {
//                     setShowOTPSection(false);
//                     setError2(null);
//                     setError1(null);
//                   }}
//                 >
//                   <Cross1Icon className="mb-2 h-5 w-5" />
//                 </button>
//               </div>
//               <div className="w-full justify-center items-center">
//                 <LockClosedIcon className="mb-2 h-10 w-10" />
//                 <h1 className="text-black text-xl font-medium ">
//                   Verify OTP to Unlock
//                 </h1>
//                 <p className="text-black mb-5 text-sm">
//                   Last step to unlock all list.
//                 </p>
//                 {error2 && error2.error && (
//                   <p className="text-red-500 text-sm mb-2 font-medium ">
//                     {error2.error}
//                   </p>
//                 )}
//                 <input
//                   type="text"
//                   onChange={(e) => setOTP(e.target.value)}
//                   placeholder="OTP"
//                   className="border-2 border-slate-500 rounded-md p-2 w-full "
//                 />
//                 <button
//                   className="md:col-start-2 self-center mt-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
//                   onClick={onVerifyOTP}
//                 >
//                   Verify OTP
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Iris;















// // import {
// //     AreaChart,
// //     ArrowDownUp,
// //     // Factory,
// //     Filter,
// //     Flag,
// //     // Search,
// //     SlidersHorizontal,
// //   } from "lucide-react";
// //   import { Checkbox } from "../ui/checkbox";
// //   import RadioGroup, { Radio } from "../ui/radio";
// // //   import { Input } from "../ui/input";
// //   import { Separator } from "../ui/separator";
// //   import {
// //     Accordion,
// //     AccordionContent,
// //     AccordionItem,
// //     AccordionTrigger,
// //   } from "../ui/accordion";
// //   import { irisRegions, irisSectors } from "@/lib/iris-sectors";
// //   import { useEffect, useState } from "react";
// //   import {
// //     Table,
// //     TableBody,
// //     TableCell,
// //     TableHead,
// //     TableHeader,
// //     TableRow,
// //   } from "../ui/table";
  
// //   import { cn } from "@/lib/utils";
// //   import { useNavigate } from "react-router-dom";
// //   import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
// //   import { LockClosedIcon, Cross1Icon } from "@radix-ui/react-icons";
// //   import axios from "axios";
// //   // import nodemailer from "nodemailer"
  
// //   interface Stock {
// //     IndustryMasterName: string;
// //     Name: string;
// //     NSECode: string;
// //     ISIN: string;
// //     ChangePer: number;
// //     CurrentMarketPriceNSE: number;
// //     NSEPriceAsOnDate: string;
// //     NSEPREVCLOSE: number;
// //     NSEPriceAsOnPrevDate: string;
// //     WeekHigh52: number;
// //     WeekLow52: number;
// //   }
  
// //   interface Sector {
// //     name: string;
// //     industryMasterName: string;
// //   }
  
// //   interface Error {
// //     error: string;
// //     status: boolean;
// //   }
  
// //   const Iris = () => {
// //     const navigate = useNavigate();
  
// //     const [isUserLogedIn, setIsUserLogedIn] = useState(false);
// //     const [showUserLoginModal, setShowUserLoginModal] = useState(false);
// //     const [showOTPSection, setShowOTPSection] = useState(false);
// //     const [sectors, setSectors] = useState<Sector[]>([]);
// //     const [stocks, setStocks] = useState<Stock[]>([]);
// //     const [region, setRegion] = useState("USA");
// //     const [exchange, setExchange] = useState(
// //       () => irisRegions.find((s) => s.name === region)?.exchanges[0]
// //     );
// //     const [searchKey, setSearchKey] = useState("");
// //     const [currencySymbol, setCurrencySymbol] = useState(
// //       region === "India" ? "₹" : "$"
// //     );
  
// //     const [isNameSorted, setIsNameSorted] = useState(1);
// //     const [isPriceSorted, setIsPriceSorted] = useState(1);
  
// //     const [error1, setError1] = useState<Error | null>(null);
// //     const otpMailer = async (to: string) => {
// //       const response = await axios({
// //         method: "post",
// //         url: "https://emailer-pro.up.railway.app/api/v1/mail/send/otp",
// //         data: {
// //           to,
// //           subject: "Your One-Time Password for IRIS – NUQI Wealth!",
// //         },
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       }).catch((err) => {
// //         setError1(err && err.response && err.response.data);
// //       });
// //       if (response && response.data && response.data.allreadySignup) {
// //         setShowUserLoginModal(false);
// //         setShowOTPSection(false);
// //         setIsUserLogedIn(true);
// //         await localStorage.setItem("isUserLogedIn", "true");
// //       } else if (response && response.data && response.data.hash) {
// //         return response.data.hash;
// //       }
// //       return null;
// //     };
  
// //     const [error2, setError2] = useState<Error | null>(null);
// //     const verifyMailedOTP = async (to: string, otp: string, hash: string) => {
// //       const response = await axios({
// //         method: "post",
// //         url: "https://emailer-pro.up.railway.app/api/v1/mail/verify/otp",
// //         data: {
// //           email: to,
// //           otp,
// //           hash,
// //         },
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       }).catch((err) => {
// //         console.log(err);
// //         setError2(err && err.response && err.response.data);
// //       });
// //       if (response && response.data && response.data.status) {
// //         return response.data.status;
// //       }
// //       return null;
// //     };
  
// //     const [email, setEmail] = useState("");
// //     const [otpHash, setOTPHash] = useState(``);
// //     const [name, setName] = useState("");
// //     const [number, setNumber] = useState("");
  
// //     const onSendOTP = async () => {
// //       const hash = await otpMailer(email);
// //       if (hash) {
// //         setOTPHash(hash);
// //         setShowUserLoginModal(false);
// //         setShowOTPSection(true);
// //       }
// //     };
  
// //     const [otp, setOTP] = useState("");
// //     const onVerifyOTP = async () => {
// //       const status = await verifyMailedOTP(email, otp, otpHash);
// //       if (status) {
// //         setShowOTPSection(false);
// //         setIsUserLogedIn(true);
// //         await localStorage.setItem("isUserLogedIn", "true");
// //       }
// //     };
  
// //     useEffect(() => {
// //       const isUserLogedIn = localStorage.getItem("isUserLogedIn");
// //       if (isUserLogedIn === "true") {
// //         setIsUserLogedIn(true);
// //       }
// //     }, []);
  
// //     const onReset = () => {
// //       setSectors([]);
// //       setRegion("India");
// //       setExchange(() => irisRegions.find((s) => s.name === region)?.exchanges[0]);
// //       setSearchKey("");
// //       fetchData();
// //     };
  
// //     const onApply = () => {
// //       const fetchSectorsData = async (sectors: Sector[]) => {
// //         console.log(sectors);
// //         if (region === "India") {
// //           setCurrencySymbol("₹");
// //         } else {
// //           setCurrencySymbol("$");
// //         }
// //         if (sectors.length === 0) {
// //           fetchData();
// //           return;
// //         }
// //         const selectedStocks: Stock[] = [];
// //         await Promise.all(
// //           sectors.map(async (s) => {
// //             let queryString = `https://api.nuqiwealth.in/GetSectorWiseStockDetails?sector=${s.industryMasterName}&nsccode=`;
  
// //             if (region === "USA") {
// //               queryString = `https://api.nuqiwealth.in/GetUSDSectorWiseStockDetails?sector=${s.industryMasterName}&exchange=${exchange}`;
// //             }
  
// //             const response = await fetch(queryString, {
// //               method: "GET",
// //             });
  
// //             const data = await response.json();
// //             selectedStocks.push(...data.Data.Table);
// //           })
// //         );
// //         setStocks(selectedStocks);
// //       };
// //       fetchSectorsData(sectors);
// //     };
  
// //     useEffect(() => {
// //       // setExchange(irisRegions.find((s) => s.name === region)?.exchanges[0]);
// //       onApply();
// //     }, [region, sectors]);
  
// //     const fetchData = async () => {
// //       if (region === "India") {
// //         const response = await fetch(
// //         `https://api.nuqiwealth.in/GetSectorWiseStockDetails?sector=&nsccode=`,
// //           {
// //             method: "GET",
// //           }
// //         );
  
// //         const data = await response.json();
// //         setStocks(data.Data.Table);
// //       } else {
// //         const response = await fetch(
// //           `https://api.nuqiwealth.in/GetUSDSectorWiseStockDetails?sector=&exchange=${exchange}`,
// //           {
// //             method: "GET",
// //           }
// //         );
  
// //         const data = await response.json();
// //         setStocks(data.Data.Table);
// //       }
// //     };
  
// //     console.log(region, exchange);
  
// //     // useEffect(() => {
// //     //     const fetchSectorsData = async (sectors: Sector[]) => {
// //     //         console.log(sectors);
// //     //         if (sectors.length === 0) {
// //     //             fetchData();
// //     //             return;
// //     //         }
// //     //         const selectedStocks: Stock[] = [];
// //     //         await Promise.all(
// //     //             sectors.map(async (s) => {
// //     //                 let queryString = https://api.nuqiwealth.in/GetSectorWiseStockDetails?sector=${s.industryMasterName}&nsccode=;
  
// //     //                 if (region === "USA") {
// //     //                     queryString = https://api.nuqiwealth.in/GetUSDSectorWiseStockDetails?sector=${s.industryMasterName}&exchange=${exchange};
// //     //                 }
  
// //     //                 const response = await fetch(queryString, {
// //     //                     method: "GET",
// //     //                 });
  
// //     //                 const data = await response.json();
// //     //                 selectedStocks.push(...data.Data.Table);
// //     //             })
// //     //         );
// //     //         setStocks(selectedStocks);
// //     //     };
// //     //     fetchSectorsData(sectors);
// //     // }, [sectors, exchange, region]);
  
// //     useEffect(() => {
// //       fetchData();
// //     }, []);
  
// //     useEffect(() => {
// //       if (searchKey.length === 0) {
// //         fetchData();
// //         return;
// //       }
// //       setStocks((prev) =>
// //         prev.filter((p) => p.Name.toLowerCase().includes(searchKey.toLowerCase()))
// //       );
// //     }, [searchKey]);
  
// //     const sortByName = () => {
// //       if (isNameSorted % 3 === 0) {
// //         fetchData();
// //       } else if (isNameSorted % 3 === 1) {
// //         const sortedStocks = stocks.sort((a, b) => {
// //           return a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1;
// //         });
// //         setStocks([...sortedStocks]);
// //       } else {
// //         const sortedStocks = stocks.sort((a, b) => {
// //           return a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1;
// //         });
// //         setStocks([...sortedStocks]);
// //       }
// //       setIsNameSorted(isNameSorted + 1);
// //     };
  
// //     const sortByPrice = () => {
// //       if (isPriceSorted % 3 === 0) {
// //         fetchData();
// //       } else if (isPriceSorted % 3 === 1) {
// //         const sortedStocks = stocks.sort((a, b) => {
// //           return a.CurrentMarketPriceNSE > b.CurrentMarketPriceNSE ? -1 : 1;
// //         });
// //         setStocks([...sortedStocks]);
// //       } else {
// //         const sortedStocks = stocks.sort((a, b) => {
// //           return a.CurrentMarketPriceNSE > b.CurrentMarketPriceNSE ? 1 : -1;
// //         });
// //         setStocks([...sortedStocks]);
// //       }
// //       setIsPriceSorted(isPriceSorted + 1);
// //     };
  
// //     // const data = [
// //     //   {
// //     //     name: "Apple Inc",
// //     //     ticker: "AAPL",
// //     //     marketCap: "$3.41T",
// //     //     price: "$224.53",
// //     //     change: "-0.83%",
// //     //     compliance: "Ethical",
// //     //     complianceStyle: "bg-green-100 text-green-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Microsoft Corp",
// //     //     ticker: "MSFT",
// //     //     marketCap: "$3.09T",
// //     //     price: "$415.55",
// //     //     change: "-2.03%",
// //     //     compliance: "Not Ethical",
// //     //     complianceStyle: "bg-red-100 text-red-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "NVIDIA Corp",
// //     //     ticker: "NVDA",
// //     //     marketCap: "$3.04T",
// //     //     price: "$123.74",
// //     //     change: "-3.7%",
// //     //     compliance: "Locked",
// //     //     complianceStyle: "bg-blue-100 text-blue-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Alphabet Inc",
// //     //     ticker: "GOOGL",
// //     //     marketCap: "$2.03T",
// //     //     price: "$163.80",
// //     //     change: "-1.24%",
// //     //     compliance: "Doubtful",
// //     //     complianceStyle: "bg-yellow-100 text-yellow-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Amazon.com Inc",
// //     //     ticker: "AMZN",
// //     //     marketCap: "$1.85T",
// //     //     price: "$176.13",
// //     //     change: "-2.21%",
// //     //     compliance: "Locked",
// //     //     complianceStyle: "bg-blue-100 text-blue-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Meta Platforms Inc",
// //     //     ticker: "META",
// //     //     marketCap: "$1.35T",
// //     //     price: "$531.93",
// //     //     change: "-0.6%",
// //     //     compliance: "Locked",
// //     //     complianceStyle: "bg-blue-100 text-blue-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Tesla Inc",
// //     //     ticker: "TSLA",
// //     //     marketCap: "$1.07T",
// //     //     price: "$720.30",
// //     //     change: "-3.5%",
// //     //     compliance: "Ethical",
// //     //     complianceStyle: "bg-green-100 text-green-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Berkshire Hathaway",
// //     //     ticker: "BRK.B",
// //     //     marketCap: "$650B",
// //     //     price: "$299.66",
// //     //     change: "-0.95%",
// //     //     compliance: "Not Ethical",
// //     //     complianceStyle: "bg-red-100 text-red-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Johnson & Johnson",
// //     //     ticker: "JNJ",
// //     //     marketCap: "$439B",
// //     //     price: "$173.55",
// //     //     change: "-0.3%",
// //     //     compliance: "Ethical",
// //     //     complianceStyle: "bg-green-100 text-green-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Visa Inc",
// //     //     ticker: "V",
// //     //     marketCap: "$468B",
// //     //     price: "$213.45",
// //     //     change: "-1.02%",
// //     //     compliance: "Not Ethical",
// //     //     complianceStyle: "bg-red-100 text-red-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Walmart Inc",
// //     //     ticker: "WMT",
// //     //     marketCap: "$410B",
// //     //     price: "$142.30",
// //     //     change: "-1.43%",
// //     //     compliance: "Doubtful",
// //     //     complianceStyle: "bg-yellow-100 text-yellow-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Samsung Electronics",
// //     //     ticker: "005930.KS",
// //     //     marketCap: "$395B",
// //     //     price: "$57.45",
// //     //     change: "-2.12%",
// //     //     compliance: "Locked",
// //     //     complianceStyle: "bg-blue-100 text-blue-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Nestle SA",
// //     //     ticker: "NSRGY",
// //     //     marketCap: "$352B",
// //     //     price: "$119.87",
// //     //     change: "-1.11%",
// //     //     compliance: "Doubtful",
// //     //     complianceStyle: "bg-yellow-100 text-yellow-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Roche Holding AG",
// //     //     ticker: "RHHBY",
// //     //     marketCap: "$348B",
// //     //     price: "$42.30",
// //     //     change: "-0.77%",
// //     //     compliance: "Ethical",
// //     //     complianceStyle: "bg-green-100 text-green-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Procter & Gamble",
// //     //     ticker: "PG",
// //     //     marketCap: "$347B",
// //     //     price: "$139.10",
// //     //     change: "-1.25%",
// //     //     compliance: "Not Ethical",
// //     //     complianceStyle: "bg-red-100 text-red-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Samsung Biologics",
// //     //     ticker: "207940.KS",
// //     //     marketCap: "$343B",
// //     //     price: "$900.00",
// //     //     change: "-1.9%",
// //     //     compliance: "Ethical",
// //     //     complianceStyle: "bg-green-100 text-green-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Toyota Motor Corp",
// //     //     ticker: "TM",
// //     //     marketCap: "$312B",
// //     //     price: "$173.88",
// //     //     change: "-1.15%",
// //     //     compliance: "Doubtful",
// //     //     complianceStyle: "bg-yellow-100 text-yellow-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "JPMorgan Chase & Co.",
// //     //     ticker: "JPM",
// //     //     marketCap: "$410B",
// //     //     price: "$132.54",
// //     //     change: "-0.9%",
// //     //     compliance: "Not Ethical",
// //     //     complianceStyle: "bg-red-100 text-red-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Walt Disney Co",
// //     //     ticker: "DIS",
// //     //     marketCap: "$293B",
// //     //     price: "$173.26",
// //     //     change: "-1.36%",
// //     //     compliance: "Locked",
// //     //     complianceStyle: "bg-blue-100 text-blue-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Exxon Mobil Corp",
// //     //     ticker: "XOM",
// //     //     marketCap: "$258B",
// //     //     price: "$59.44",
// //     //     change: "-2.31%",
// //     //     compliance: "Locked",
// //     //     complianceStyle: "bg-blue-100 text-blue-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Pfizer Inc",
// //     //     ticker: "PFE",
// //     //     marketCap: "$250B",
// //     //     price: "$43.55",
// //     //     change: "-0.85%",
// //     //     compliance: "Ethical",
// //     //     complianceStyle: "bg-green-100 text-green-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Cisco Systems Inc",
// //     //     ticker: "CSCO",
// //     //     marketCap: "$241B",
// //     //     price: "$55.28",
// //     //     change: "-1.11%",
// //     //     compliance: "Locked",
// //     //     complianceStyle: "bg-blue-100 text-blue-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "PepsiCo Inc",
// //     //     ticker: "PEP",
// //     //     marketCap: "$230B",
// //     //     price: "$164.59",
// //     //     change: "-0.67%",
// //     //     compliance: "Doubtful",
// //     //     complianceStyle: "bg-yellow-100 text-yellow-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Intel Corp",
// //     //     ticker: "INTC",
// //     //     marketCap: "$229B",
// //     //     price: "$57.35",
// //     //     change: "-1.02%",
// //     //     compliance: "Locked",
// //     //     complianceStyle: "bg-blue-100 text-blue-600",
// //     //     icon: "",
// //     //   },
// //     //   {
// //     //     name: "Coca-Cola Co",
// //     //     ticker: "KO",
// //     //     marketCap: "$230B",
// //     //     price: "$57.48",
// //     //     change: "-0.55%",
// //     //     compliance: "Not Ethical",
// //     //     complianceStyle: "bg-red-100 text-red-600",
// //     //     icon: "",
// //     //   },
// //     // ];
  
// //     return (
// //       <section className="py-5 sm:py-16 lg:py-1">
// //         <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
// //           <div className="max-w-3xl mx-auto text-center">
// //             <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a] sm:text-4xl lg:text-5xl">
// //               Ethical Screener
// //             </h2>
// //             <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-secondary">
// //               Uncover Your Ethical Investing Journey: Explore Nuqi's Universe of
// //               4000+ Ethical Global & Indian Stocks | ETF's
// //             </p>
// //           </div>
// //         </div>
// //         <div className="flex md:container py-10 w-full">
// //           <div className="hidden md:block">
            
// //             {/* <div className="flex w-full items-center gap-4 p-4">
// //               <button
// //                 className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
// //                 onClick={onReset}
// //               >
// //                 Reset
// //               </button>
// //               <button
// //                 className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
// //                 onClick={onApply}
// //               >
// //                 Apply
// //               </button>
// //             </div> */}
// //           </div>
  
// //           <div className="w-full md:px-8 px-3">
// //             <div className="">
// //               <div className="mx-2 md:mx-10 mb-6 flex items-center gap-4">
// //                 {/* <div className="relative ml-auto w-full">
// //                   <Search className="absolute left-2.5 top-2.5 h-4 w-4" />
// //                   <Input
// //                     type="search"
// //                     placeholder="Search..."
// //                     className="w-full rounded-lg bg-background pl-8"
// //                     value={searchKey}
// //                     onChange={(e) => setSearchKey(e.target.value)}
// //                   />
// //                 </div> */}
// //                 <Dialog>
// //                   <DialogTrigger className=" md:hidden">
// //                     <SlidersHorizontal className="h-4 w-4 md:hidden" />
// //                   </DialogTrigger>
// //                   <DialogContent className="p-0">
// //                     <>
// //                       <div className="flex flex-col border border-secondary/25 shadow-md rounded-md whitespace-nowrap max-h-min">
// //                         <div className="flex items-center gap-1 px-4 py-2">
// //                           <Filter className="h-4 w-4 text-muted-foreground" />
// //                           <h2 className="text-xl font-semibold tracking-wide">
// //                             Filter By
// //                           </h2>
// //                         </div>
// //                         <Separator className="bg-secondary/25 my-1" />
// //                         <div className="w-full">
// //                           <Accordion type="single" collapsible className="w-full">
// //                             <AccordionItem value="item-1" className="">
// //                               <AccordionTrigger className="px-1 py-2">
// //                                 <div className="flex items-center gap-1 px-4 py-2">
// //                                   <Flag className="h-4 w-4 text-muted-foreground" />
// //                                   <h2 className="text-lg font-semibold">
// //                                     Region
// //                                   </h2>
// //                                 </div>
// //                               </AccordionTrigger>
// //                               <AccordionContent className="px-5 py-2">
// //                                 <RadioGroup
// //                                   onValueChange={(option) => setRegion(option)}
// //                                   defaultValue={region}
// //                                 >
// //                                   <div className="flex flex-col gap-3">
// //                                     {irisRegions.map((r) => (
// //                                       <div
// //                                         className="flex items-center space-x-2"
// //                                         key={r.name}
// //                                       >
// //                                         <Radio id={r.name} value={r.name} />
// //                                         <label
// //                                           htmlFor={r.name}
// //                                           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// //                                         >
// //                                           {r.name}
// //                                         </label>
// //                                       </div>
// //                                     ))}
// //                                   </div>
// //                                 </RadioGroup>
// //                               </AccordionContent>
// //                             </AccordionItem>
// //                             {/* <AccordionItem value="item-2">
// //                                                           <AccordionTrigger className="px-1 py-2">
// //                                                               <div className="flex items-center gap-1 px-4 py-2">
// //                                                                   <Factory className="h-4 w-4 text-muted-foreground" />
// //                                                                   <h2 className="text-lg font-semibold">
// //                                                                       Exchange
// //                                                                   </h2>
// //                                                               </div>
// //                                                           </AccordionTrigger>
// //                                                           <AccordionContent className="px-5 py-2">
// //                                                               <div className="flex flex-col gap-3">
// //                                                                   {irisRegions
// //                                                                       .find(
// //                                                                           (s) =>
// //                                                                               s.name ===
// //                                                                               region
// //                                                                       )
// //                                                                       ?.exchanges.map(
// //                                                                           (e) => (
// //                                                                               <div
// //                                                                                   className="flex items-center space-x-2"
// //                                                                                   key={
// //                                                                                       e
// //                                                                                   }
// //                                                                               >
// //                                                                                   <Checkbox
// //                                                                                       id={
// //                                                                                           e
// //                                                                                       }
// //                                                                                       checked={
// //                                                                                           exchange ===
// //                                                                                           e
// //                                                                                       }
// //                                                                                       onCheckedChange={(
// //                                                                                           state
// //                                                                                       ) => {
// //                                                                                           if (
// //                                                                                               state
// //                                                                                           ) {
// //                                                                                               setExchange(
// //                                                                                                   e
// //                                                                                               );
// //                                                                                           }
// //                                                                                       }}
// //                                                                                   />
// //                                                                                   <label
// //                                                                                       htmlFor={
// //                                                                                           e
// //                                                                                       }
// //                                                                                       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// //                                                                                   >
// //                                                                                       {
// //                                                                                           e
// //                                                                                       }
// //                                                                                   </label>
// //                                                                               </div>
// //                                                                           )
// //                                                                       )}
// //                                                               </div>
// //                                                           </AccordionContent>
// //                                                       </AccordionItem> */}
// //                             <AccordionItem value="item-3">
// //                               <AccordionTrigger className="px-1 py-2">
// //                                 <div className="flex items-center gap-1 px-4 py-2">
// //                                   <AreaChart className="h-4 w-4 text-muted-foreground" />
// //                                   <h2 className="text-lg font-semibold">
// //                                     Sector
// //                                   </h2>
// //                                 </div>
// //                               </AccordionTrigger>
// //                               <AccordionContent className="px-5 py-2">
// //                                 <div className="flex flex-col gap-3">
// //                                   {irisSectors.map((sector) => (
// //                                     <div
// //                                       className="flex items-center space-x-2"
// //                                       key={sector.industryMasterName}
// //                                     >
// //                                       <Checkbox
// //                                         id={sector.industryMasterName}
// //                                         checked={
// //                                           sectors.find(
// //                                             (s) =>
// //                                               s.industryMasterName ===
// //                                               sector.industryMasterName
// //                                           ) !== undefined
// //                                         }
// //                                         onCheckedChange={(state) => {
// //                                           if (!state) {
// //                                             setSectors(
// //                                               sectors.filter(
// //                                                 (s) =>
// //                                                   s.industryMasterName !==
// //                                                   sector.industryMasterName
// //                                               )
// //                                             );
// //                                           } else {
// //                                             setSectors(sectors.concat(sector));
// //                                           }
// //                                         }}
// //                                       />
// //                                       <label
// //                                         htmlFor={sector.industryMasterName}
// //                                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// //                                       >
// //                                         {sector.name}
// //                                       </label>
// //                                     </div>
// //                                   ))}
// //                                 </div>
// //                               </AccordionContent>
// //                             </AccordionItem>
// //                           </Accordion>
// //                         </div>
// //                       </div>
// //                       <div className="flex w-full items-center gap-4 p-2">
// //                         <button
// //                           className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
// //                           onClick={onReset}
// //                         >
// //                           Reset
// //                         </button>
// //                         <button
// //                           className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
// //                           onClick={onApply}
// //                         >
// //                           Apply
// //                         </button>
// //                       </div>
// //                     </>
// //                   </DialogContent>
// //                 </Dialog>
// //               </div>
  
// //               <div className="rounded-md  flex flex-col border border-secondary/25 shadow-md">
// //                 <Table>
// //                   <TableHeader>
// //                     <TableRow>
// //                       <TableHead className="cursor-pointer" onClick={sortByName}>
// //                         <div className="flex items-center my-3">
// //                           <p className="text-center text-lg">Name</p>
// //                           <ArrowDownUp className="h-4 w-4 ml-1" />
// //                         </div>
// //                       </TableHead>
// //                       <TableHead onClick={sortByPrice} className="cursor-pointer">
// //                         <div className="flex items-center">
// //                           <p className="text-center text-lg">Price</p>
// //                           <ArrowDownUp className="h-4 w-4 ml-1" />
// //                         </div>
// //                       </TableHead>
// //                       <TableHead className="text-center underline text-lg">
// //                         52 Week High
// //                       </TableHead>
// //                       <TableHead className="text-center underline text-lg whitespace-nowrap">
// //                         52 Week Low
// //                       </TableHead>
  
// //                       <TableHead className="text-center underline text-lg">
// //                         Change
// //                       </TableHead>
// //                       <TableHead className="text-center text-lg ">
// //                         Compliance
// //                       </TableHead>
// //                     </TableRow>
// //                   </TableHeader>
// //                   <TableBody className="w-full">
// //                     {stocks.map((s, index) =>
// //                       !isUserLogedIn && index > 2 ? (
// //                         <>
// //                           <TableRow key={s.Name} className="blur">
// //                             <TableCell className="font-normal md:font-medium">
// //                               {s.Name}
// //                             </TableCell>
// //                             <TableCell className="font-normal md:font-semibold whitespace-nowrap">
// //                               {currencySymbol}{" "}
// //                               {s.CurrentMarketPriceNSE.toLocaleString("en-GB")}
// //                             </TableCell>
// //                             <TableCell className="text-center whitespace-nowrap">
// //                               {currencySymbol}{" "}
// //                               {s.WeekHigh52.toLocaleString("en-GB")}
// //                             </TableCell>
// //                             <TableCell className="text-center whitespace-nowrap">
// //                               {currencySymbol}{" "}
// //                               {s.WeekLow52.toLocaleString("en-GB")}
// //                             </TableCell>
// //                             <TableCell
// //                               className={cn(
// //                                 "text-right font-bold whitespace-nowrap",
// //                                 {
// //                                   "text-green-500": s.ChangePer > 0,
// //                                   "text-red-500": s.ChangePer < 0,
// //                                 }
// //                               )}
// //                             >
// //                               {s.ChangePer.toFixed(2)} %
// //                             </TableCell>
// //                             <TableCell>
// //                               <div className="text-center bg-green-200 rounded-md border-green-500 text-green-800 md:p-1 p-1">
// //                                 Compliant
// //                               </div>
// //                             </TableCell>
// //                           </TableRow>
// //                           <TableRow>
// //                             <TableCell className="font-normal md:font-medium md:hidden md:px-8 px-3">
// //                               {!isUserLogedIn && index === 3 && (
// //                                 <button
// //                                   className="md:col-start-2 ml-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
// //                                   onClick={() => setShowUserLoginModal(true)}
// //                                 >
// //                                   <LockClosedIcon className="mr-2 h-6 w-6" />
// //                                   Sign-Up for free and unlock.
// //                                 </button>
// //                               )}
// //                             </TableCell>
// //                             <TableCell className="font-normal md:font-semibold whitespace-nowrap"></TableCell>
// //                             <TableCell className="text-center whitespace-nowrap"></TableCell>
// //                             <TableCell className="text-center whitespace-nowrap hidden md:block">
// //                               {!isUserLogedIn && index === 3 && (
// //                                 <button
// //                                   className="md:col-start-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
// //                                   onClick={() => setShowUserLoginModal(true)}
// //                                 >
// //                                   <LockClosedIcon className="mr-2 h-6 w-6" />
// //                                   Sign-Up for free and unlock.
// //                                 </button>
// //                               )}
// //                             </TableCell>
// //                             <TableCell></TableCell>
// //                             <TableCell></TableCell>
// //                           </TableRow>
// //                         </>
// //                       ) : (
// //                         <TableRow
// //                           key={s.Name}
// //                           className="cursor-pointer"
// //                           onClick={() => {
// //                             if (region === "India") {
// //                               navigate(`/stock?symbol=BSE:${s.NSECode}`);
// //                             } else {
// //                               navigate(`/stock?symbol=${exchange}:${s.NSECode}`);
// //                             }
// //                           }}
// //                         >
// //                           <TableCell className="font-normal md:font-medium">
// //                             {s.Name}
// //                           </TableCell>
// //                           <TableCell className="font-normal md:font-semibold whitespace-nowrap">
// //                             {currencySymbol}{" "}
// //                             {s.CurrentMarketPriceNSE.toLocaleString("en-GB")}
// //                           </TableCell>
// //                           <TableCell className="text-center whitespace-nowrap">
// //                             {currencySymbol}{" "}
// //                             {s.WeekHigh52.toLocaleString("en-GB")}
// //                           </TableCell>
// //                           <TableCell className="text-center whitespace-nowrap">
// //                             {currencySymbol} {s.WeekLow52.toLocaleString("en-GB")}
// //                           </TableCell>
// //                           <TableCell
// //                             className={cn(
// //                               "w-10 text-right text-lg font-bold whitespace-nowrap",
// //                               {
// //                                 "text-green-500": s.ChangePer > 0,
// //                                 "text-red-500": s.ChangePer < 0,
// //                               }
// //                             )}
// //                           >
// //                             {s.ChangePer.toFixed(2)} %
// //                           </TableCell>
// //                           <TableCell>
// //                             <div className="text-center text-lg bg-green-200 rounded-md border-green-500 text-green-800 md:p-1 p-2 my-2">
// //                               Ethical
// //                             </div>
// //                           </TableCell>
// //                         </TableRow>
// //                       )
// //                     )}
// //                   </TableBody>
// //                 </Table>
// //                 {stocks.length === 0 && (
// //                   <div className="text-center w-full flex justify-center font-semibold text-lg p-4">
// //                     No matching stocks available. Try out different filters!
// //                   </div>
// //                 )}
// //               </div>
  
// //               {/* <div className="p-4">
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white border rounded-lg shadow">
// //             <thead>
// //             <tr className="text-left text-gray-400 bg-white-100 border-b-2 border-gray-200">
// //     <th className="px-6 py-3 text-xl font-normal">Name</th>
// //     <th className="px-6 py-3 underline text-xl font-normal">Market Cap</th>
  
// //     <th className="px-6 py-3 underline text-xl font-normal">Price</th>
// //     <th className="px-6 py-3 underline text-xl font-normal">Change</th>
// //     <th className="px-6 py-3 text-xl font-normal">Compliance</th>
// //   </tr>
  
// //             </thead>
// //             <tbody>
// //               {data.map((stock, index) => (
// //                 <tr key={index} className="border-b hover:bg-gray-50">
// //                   <td className="px-6 py-4 flex items-center space-x-3">
// //                     <div className="text-2xl">{stock.icon}</div>
// //                     <div>
// //                       <div className="font-medium text-gray-900">{stock.name}</div>
// //                       <div className="text-sm text-gray-500">{stock.ticker}</div>
// //                     </div>
// //                   </td>
// //                   <td className="px-6 py-4 font-semibold">{stock.marketCap}</td>
// //                   <td className="px-6 py-4 font-semibold">{stock.price}</td>
// //                   <td className="px-6 py-4 text-red-600">{stock.change}</td>
// //                   <td className="px-6 py-4">
// //                     <span className={px-2 py-1 rounded ${stock.complianceStyle}}>{stock.compliance}</span>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div> */}
// //             </div>
// //           </div>
// //         </div>
// //         {/* {showUserLoginModal && (
// //           <div className="static">
// //             <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"></div>
// //             <div className="fixed h-screen top-0 right-0 left-0 z-20 flex justify-center items-center">
// //               <div className="mx-4 my-4 bg-slate-200 p-7 rounded-xl">
// //                 <div className="flex justify-end">
// //                   <button
// //                     onClick={() => {
// //                       setShowUserLoginModal(false);
// //                       setError2(null);
// //                       setError1(null);
// //                     }}
// //                   >
// //                     <Cross1Icon className="mb-2 h-5 w-5" />
// //                   </button>
// //                 </div>
// //                 <div className="w-full justify-center items-center">
// //                   <LockClosedIcon className="mb-2 h-10 w-10" />
// //                   <h1 className="text-black text-xl font-medium ">
// //                     Sign-Up to Unlock
// //                   </h1>
// //                   <p className="text-black mb-5 text-sm">
// //                     Sign-up for free and unlock all list.
// //                   </p>
// //                   {error1 && error1.error && (
// //                     <p className="text-red-500 text-sm mb-2 font-medium ">
// //                       {error1.error}
// //                     </p>
// //                   )}
// //                   <div className="space-y-4">
// //     <input
// //       type="text"
// //       onChange={(e) => setEmail(e.target.value)}
// //       placeholder="Enter your email"
// //       className="w-full h-10 pl-3 rounded-md border border-[#e5e5e5] outline-none shadow-md transition-all duration-300 ease-[cubic-bezier(0.15,0.83,0.66,1)]"
// //     />
// //     <button
// //       className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-full h-10 bg-gradient-to-b from-[#000] via-[#000] to-[#000] shadow-sm rounded-md border-0 font-semibold text-xs text-white"
// //       onClick={onSendOTP}
// //     >
// //       Unlock
// //     </button>
// //   </div>
  
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )} */}
// //    {/* {showUserLoginModal && (
// //     <div className="relative w-[320px] bg-white shadow-[0px_187px_75px_rgba(0,0,0,0.01),0px_105px_63px_rgba(0,0,0,0.05),0px_47px_47px_rgba(0,0,0,0.09),0px_12px_26px_rgba(0,0,0,0.1),0px_0px_0px_rgba(0,0,0,0.1)] rounded-xl p-5">
// //       <button
// //         className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
// //         onClick={() => setShowUserLoginModal(false)} // Replace with your method to close the modal
// //       >
// //         <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// //         </svg>
// //       </button>
      
// //       <form className="flex flex-col items-start gap-5">
// //         <div className="flex items-center justify-center w-15 h-15 bg-[#ECF1FD] shadow-[0px_0.5px_0.5px_#EFEFEF,0px_1px_0.5px_rgba(239,239,239,0.5)] rounded-sm">
// //           icon
// //         </div>
// //         <div className="flex flex-col gap-2">
// //           <label className="font-normal font-bold text-lg leading-6 text-[#2B2B2F]">Subscribe for updates</label>
// //           <span className="font-normal font-semibold text-xs leading-5 text-[#5F5D6B]">Subscribe to this weekly news letter so you don’t miss out on the new hot tech topics.</span>
// //         </div>
// //         <input
// //           placeholder="Enter your e-mail"
// //           title="Enter your e-mail"
// //           name="email"
// //           type="email"
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="w-full h-10 pl-3 rounded-sm border border-[#e5e5e5] outline-none shadow-[0px_1px_0px_#efefef,0px_1px_0.5px_rgba(239,239,239,0.5)] transition-all duration-300 ease-[cubic-bezier(0.15,0.83,0.66,1)] focus:border-transparent focus:ring-1 focus:ring-[#2B2B2F] bg-transparent"
// //         />
// //         <button
// //           className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-full h-10 bg-gradient-to-b from-[#000] via-[#000] to-[#000] shadow-sm rounded-sm border-0 font-semibold text-xs text-white"
// //           type="submit"
// //           onClick={onSendOTP}
// //         >
// //           Submit
// //         </button>
// //       </form>
// //     </div>
// //   )} */}
  
// //   {showUserLoginModal && (
// //     <div className="fixed inset-0 bg-black bg-opacity-75 z-10 flex justify-center items-center">
// //       <div className="relative w-[320px] bg-white shadow-[0px_187px_75px_rgba(0,0,0,0.01),0px_105px_63px_rgba(0,0,0,0.05),0px_47px_47px_rgba(0,0,0,0.09),0px_12px_26px_rgba(0,0,0,0.1),0px_0px_0px_rgba(0,0,0,0.1)] rounded-xl p-5">
// //         <button
// //           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
// //           onClick={() => {
// //             setShowUserLoginModal(false);
// //             setError2(null);
// //             setError1(null);
// //           }}
// //         >
// //           <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// //           </svg>
// //         </button>
// //         <form className="flex flex-col items-start gap-5">
// //           <div className="flex items-center justify-center w-15 h-15 bg-[#ECF1FD] shadow-[0px_0.5px_0.5px_#EFEFEF,0px_1px_0.5px_rgba(239,239,239,0.5)] rounded-sm">
// //             {/* Replace with actual icon */}
// //             <LockClosedIcon className="mb-2 h-10 w-10 text-[#2B2B2F]" />
// //           </div>
// //           <div className="flex flex-col gap-2">
// //             <label className="font-normal font-bold text-lg leading-6 text-[#2B2B2F]">Subscribe for updates</label>
// //             <span className="font-normal font-semibold text-xs leading-5 text-[#5F5D6B]">Subscribe to this weekly newsletter so you don’t miss out on the new hot tech topics.</span>
// //           </div>
// //           {error1 && error1.error && (
// //             <p className="text-red-500 text-sm mb-2 font-medium">{error1.error}</p>
// //           )}
// //           <div className="inputGroup w-72">
// //                       <input
// //                           autoComplete="off"
// //                           required
// //                           type="text"
// //                           id="name"
// //                           value={name}
// //                           onChange={(e) => setName(e.target.value)}
// //                       />
// //                       <label htmlFor="name">Name</label>
// //                   </div>
  
// //                   <div className="inputGroup w-72">
// //                       <input
// //                           autoComplete="off"
// //                           required
// //                           type="email"
// //                           id="name"
// //                           value={name}
// //                           onChange={(e) => setEmail(e.target.value)}
// //                       />
// //                       <label htmlFor="email">Email</label>
// //                   </div>
  
// //                   <div className="w-72 relative">
// //                       <div className="flex border-2 border-[rgb(200, 200, 200)] rounded-3xl relative">
// //                           <span className="flex items-center border-r border-[rgb(200, 200, 200)] px-3">
// //                               +971
// //                           </span>
// //                           <input
// //                               type="tel"
// //                               id="tel"
// //                               className="w-full px-4 py-[11px] border-none outline-none bg-transparent rounded-e-xl peer"
// //                               onChange={(e) => setNumber(e.target.value)}
// //                               value={number}
// //                           />
// //                           <label
// //                               htmlFor="tel"
// //                               className="absolute left-16 top-[0.5rem] transform -translate-y-[-8%] text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-[1.2rem] bg-white px-1"
// //                           >
// //                               Phone number
// //                           </label>
// //                       </div>
// //                   </div>
// //           <button
// //             className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-full h-10 bg-gradient-to-b from-[#000] via-[#000] to-[#000] shadow-sm rounded-sm border-0 font-semibold text-xs text-white"
// //             type="submit"
// //             onClick={onSendOTP}
// //           >
// //             Submit
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   )}
  
  
  
// //         {showOTPSection && (
// //           <div className="static">
// //             <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75 "></div>
// //             {/** Just added */}
// //             <div className="fixed h-screen top-0 right-0 left-0 z-20 flex justify-center items-center">
// //               <div className="mx-4 my-4 bg-slate-200 p-7 rounded-xl rounded-md py-2 md:py-6 md:px-8 flex flex-col gap-8 border border-secondary/25 shadow-md">
// //                 <div className="flex justify-end">
// //                   <button
// //                     onClick={() => {
// //                       setShowOTPSection(false);
// //                       setError2(null);
// //                       setError1(null);
// //                     }}
// //                   >
// //                     <Cross1Icon className="mb-2 h-5 w-5" />
// //                   </button>
// //                 </div>
// //                 <div className="w-full justify-center items-center">
// //                   <LockClosedIcon className="mb-2 h-10 w-10" />
// //                   <h1 className="text-black text-xl font-medium ">
// //                     Verify OTP to Unlock
// //                   </h1>
// //                   <p className="text-black mb-5 text-sm">
// //                     Last step to unlock all list.
// //                   </p>
// //                   {error2 && error2.error && (
// //                     <p className="text-red-500 text-sm mb-2 font-medium ">
// //                       {error2.error}
// //                     </p>
// //                   )}
// //                   <input
// //                     type="text"
// //                     onChange={(e) => setOTP(e.target.value)}
// //                     placeholder="OTP"
// //                     className="border-2 border-slate-500 rounded-md p-2 w-full "
// //                   />
// //                   <button
// //                     className="md:col-start-2 self-center mt-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
// //                     onClick={onVerifyOTP}
// //                   >
// //                     Verify OTP
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </section>
// //     );
// //   };
  
// //   export default Iris;