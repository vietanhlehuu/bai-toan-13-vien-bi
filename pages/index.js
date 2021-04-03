import { useState } from "react";
import Ball from "../components/ball";
import Card from "../components/card";
import Hr from "../components/hr";
import ScaleButton from "../components/scale-button";
import VerticalLine from "../components/vertical-line";

const BlueBall = ({ children }) => <Ball color="bg-blue-600">{children}</Ball>;
const RedBall = ({ children }) => <Ball color="bg-red-600">{children}</Ball>;
const GreenBall = ({ children }) => (
  <Ball color="bg-green-600">{children}</Ball>
);
const PurpleBall = ({ children }) => (
  <Ball color="bg-purple-600">{children}</Ball>
);
const PinkBall = ({ children }) => <Ball color="bg-pink-600">{children}</Ball>;
const OrangeBall = ({ children }) => (
  <Ball color="bg-orange-600">{children}</Ball>
);

export default function Home() {
  const [state, setState] = useState("0");
  return (
    <div className="min-h-screen p-10 pb-36">
      <h1 className="mb-4 text-xl">
        Câu hỏi: Cho 13 viên bi, trong đó có 12 viên bi CHUẨN và 1 viên bi KHÁC
        (khác khối lượng, không xác định nhẹ hơn hay nặng hơn). Sử dụng 1 cân
        cân bằng, với 3 lần cân, hãy tìm ra viên bi KHÁC.
      </h1>
      <h1 className="mb-8 text-xl">Lời giải gợi ý:</h1>
      <div className="inline-flex flex-col items-center justify-center min-w-full">
        <Card>
          <h1>
            Lấy 13 viên bi, chia thành
            <RedBall>4</RedBall>
            <BlueBall>4</BlueBall>
            <GreenBall>5</GreenBall>
          </h1>
          <h1>
            Đem cân <RedBall>4</RedBall>
            <BlueBall>4</BlueBall>
          </h1>
        </Card>
        <VerticalLine />
        <ScaleButton onClick={() => setState("1")}>
          Cân <RedBall>4</RedBall> vs
          <BlueBall>4</BlueBall>
        </ScaleButton>
        {state.startsWith("1") && (
          <>
            <VerticalLine big />
            <div className="flex items-start justify-between w-full lg:w-1/2">
              <div className="flex flex-col items-center">
                <Hr className="w-1/2 ml-auto" />
                <VerticalLine big />
                <ScaleButton onClick={() => setState("1.1")}>Bằng</ScaleButton>
                {state.startsWith("1.1") && (
                  <div className="w-full">
                    <VerticalLine className="mx-auto" />
                    <div className="inline-flex flex-col items-center w-80">
                      <Card>
                        <h1>
                          Lúc này viên bi KHÁC sẽ nằm ở trong
                          <GreenBall>5</GreenBall>
                        </h1>
                        <h1>
                          Vì khối lượng bằng nhau nên <RedBall>4</RedBall> và{" "}
                          <BlueBall>4</BlueBall> là 8 viên CHUẨN
                        </h1>
                        <br />
                        <h1>
                          Tách <GreenBall>5</GreenBall> thành{" "}
                          <PurpleBall>3</PurpleBall> và <PinkBall>2</PinkBall>
                        </h1>
                        <h1>
                          Cân <PurpleBall>3</PurpleBall> với 3 viên CHUẨN
                        </h1>
                      </Card>
                      <VerticalLine />
                      <ScaleButton onClick={() => setState("1.1.1")}>
                        Cân <PurpleBall>3</PurpleBall> vs
                        <RedBall>3</RedBall>
                      </ScaleButton>
                      {state.startsWith("1.1.1") && (
                        <>
                          <VerticalLine big />
                          <div className="flex items-start justify-between w-full">
                            <div className="flex flex-col items-center">
                              <Hr className="w-1/2 ml-auto" />
                              <VerticalLine big />
                              <ScaleButton onClick={() => setState("1.1.1.1")}>
                                Bằng
                              </ScaleButton>
                              {state.startsWith("1.1.1.1") && (
                                <div className="w-full">
                                  <VerticalLine className="mx-auto" />
                                  <div className="inline-flex flex-col items-center w-80">
                                    <Card>
                                      <h1>
                                        Lúc này viên bi KHÁC sẽ nằm ở trong
                                        <PinkBall>2</PinkBall>
                                      </h1>
                                      <h1>
                                        Chỉ cần lấy 1 viên trong đó, cân với
                                        viên bi CHUẨN
                                      </h1>
                                      <h1>
                                        Nếu bằng, viên còn lại chính là viên bi
                                        KHÁC
                                      </h1>
                                      <h1>
                                        hoặc nếu không, viên đang được cân chính
                                        là đáp án
                                      </h1>
                                    </Card>
                                  </div>
                                </div>
                              )}
                            </div>
                            <Hr />
                            <div className="flex flex-col items-center">
                              <Hr className="w-1/2 mr-auto" />
                              <VerticalLine big />
                              <ScaleButton onClick={() => setState("1.1.1.2")}>
                                Không bằng
                              </ScaleButton>
                              {state.startsWith("1.1.1.2") && (
                                <div className="w-full">
                                  <VerticalLine className="mx-auto" />
                                  <div className="inline-flex flex-col items-center w-80">
                                    <Card>
                                      <h1>
                                        Lúc này viên bi KHÁC sẽ nằm ở trong
                                        <PurpleBall>3</PurpleBall>
                                      </h1>
                                      <h1 className="mb-2">
                                        Đồng thời chúng ta cũng biết được
                                        <PurpleBall>3</PurpleBall> (3 viên không
                                        chuẩn) nặng hơn hay nhẹ hơn 3 viên CHUẨN
                                      </h1>
                                      <h1>
                                        Từ đó cũng có thể suy ra viên KHÁC nặng
                                        hơn hay nhẹ hơn 2 viên còn lại trong
                                        <PurpleBall>3</PurpleBall>
                                      </h1>
                                    </Card>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <Hr />
              <div className="flex flex-col items-center">
                <Hr className="w-1/2 mr-auto" />
                <VerticalLine big />
                <ScaleButton onClick={() => setState("1.2")}>
                  Không bằng
                </ScaleButton>
                {state.startsWith("1.2") && (
                  <div className="w-full">
                    <VerticalLine className="mx-auto" />
                    <div className="inline-flex flex-col items-center w-80">
                      <Card>
                        <h1>Lúc này viên bi KHÁC sẽ nằm ở 1 trong 2 bên </h1>
                        <h1>
                          Và chắc chắn <GreenBall>5</GreenBall> viên là các viên
                          CHUẨN
                        </h1>
                        <br />
                        <h1>Đoạn này sẽ bắt đầu khó khăn hơn 1 chút.</h1>
                        <h1>
                          Giả sử <RedBall>4</RedBall> là các viên nặng, còn
                          <BlueBall>4</BlueBall> là các viên nhẹ hơn trong lần
                          cân vừa rồi.
                        </h1>
                        <h1>
                          Lấy 2 viên trong 4 viên <RedBall>4</RedBall>.
                        </h1>
                        <h1>
                          Lấy 3 viên trong 4 viên <BlueBall>4</BlueBall>.
                        </h1>
                        <h1>--</h1>
                        <h1>
                          Chúng ta có 5 viên: <RedBall>2</RedBall> +{" "}
                          <BlueBall>3</BlueBall>
                        </h1>
                        <h1>--</h1>
                        <h1>
                          Và chúng ta còn 3 viên ở ngoài, cụ thể:{" "}
                          <RedBall>2</RedBall> + <BlueBall>1</BlueBall>
                        </h1>
                      </Card>
                      <VerticalLine />
                      <ScaleButton onClick={() => setState("1.2.1")}>
                        Cân (<RedBall>2</RedBall> + <BlueBall>3</BlueBall>) vs{" "}
                        <GreenBall>5</GreenBall>
                      </ScaleButton>
                      {state.startsWith("1.2.1") && (
                        <>
                          <VerticalLine big />
                          <div className="flex items-start justify-between w-full">
                            <div className="flex flex-col items-center">
                              <Hr className="w-1/2 ml-auto" />
                              <VerticalLine big />
                              <ScaleButton onClick={() => setState("1.2.1.1")}>
                                Bằng
                              </ScaleButton>
                              {state.startsWith("1.2.1.1") && (
                                <div className="w-full">
                                  <VerticalLine className="mx-auto" />
                                  <div className="inline-flex flex-col items-center w-80">
                                    <Card>
                                      <h1>
                                        Chắc hẳn lúc này viên KHÁC đó đang nằm
                                        trong <RedBall>2</RedBall> hoặc chính là{" "}
                                        <BlueBall>1</BlueBall>
                                      </h1>
                                      <h1>
                                        Nếu là 1 trong <RedBall>2</RedBall>, thì
                                        chắc chắn viên KHÁC đó phải là nặng hơn
                                        viên CHUẨN. (Vì đã giả sử{" "}
                                        <RedBall>4</RedBall> nặng hơn, tức{" "}
                                        <BlueBall>4</BlueBall> là CHUẨN)
                                      </h1>
                                    </Card>
                                    <VerticalLine />
                                    <ScaleButton
                                      onClick={() => setState("1.2.1.1.1")}
                                    >
                                      Cân <RedBall>1</RedBall> vs{" "}
                                      <RedBall>1</RedBall>
                                    </ScaleButton>
                                    {state.startsWith("1.2.1.1.1") && (
                                      <>
                                        <VerticalLine big />
                                        <div className="flex items-start justify-between w-full">
                                          <div className="flex flex-col items-center">
                                            <Hr className="w-1/2 ml-auto" />
                                            <VerticalLine big />
                                            <ScaleButton
                                              onClick={() =>
                                                setState("1.2.1.1.1.1")
                                              }
                                            >
                                              Bằng
                                            </ScaleButton>
                                            {state.startsWith(
                                              "1.2.1.1.1.1"
                                            ) && (
                                              <div className="w-full">
                                                <VerticalLine className="mx-auto" />
                                                <div className="inline-flex flex-col items-center w-80">
                                                  <Card>
                                                    <h1>
                                                      Viên KHÁC là{" "}
                                                      <BlueBall>1</BlueBall>
                                                    </h1>
                                                  </Card>
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                          <Hr />
                                          <div className="flex flex-col items-center">
                                            <Hr className="w-1/2 mr-auto" />
                                            <VerticalLine big />
                                            <ScaleButton
                                              onClick={() =>
                                                setState("1.2.1.1.1.2")
                                              }
                                            >
                                              Không bằng
                                            </ScaleButton>
                                            {state.startsWith(
                                              "1.2.1.1.1.2"
                                            ) && (
                                              <div className="w-full">
                                                <VerticalLine className="mx-auto" />
                                                <div className="inline-flex flex-col items-center w-80">
                                                  <Card>
                                                    <h1>
                                                      Viên khác là viên{" "}
                                                      <RedBall>1</RedBall> nặng
                                                      hơn
                                                    </h1>
                                                  </Card>
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                            <Hr />
                            <div className="flex flex-col items-center">
                              <Hr className="w-1/2 mr-auto" />
                              <VerticalLine big />
                              <ScaleButton onClick={() => setState("1.2.1.2")}>
                                Không bằng
                              </ScaleButton>
                              {state.startsWith("1.2.1.2") && (
                                <div className="w-full">
                                  <VerticalLine className="mx-auto" />
                                  <div className="inline-flex flex-col items-center w-80">
                                    <Card>
                                      <h1>
                                        Lúc này viên bi KHÁC sẽ nằm ở trong
                                        <RedBall>2</RedBall> hoặc{" "}
                                        <BlueBall>3</BlueBall>
                                      </h1>
                                      <h1>---</h1>
                                      <h1 className="mb-2">
                                        Nhưng chúng ta có thể biết được chính nó
                                        đang nằm cụ thể bên nào.
                                      </h1>
                                      <h1 className="mb-2">
                                        Nếu nằm trong <RedBall>2</RedBall> (phe
                                        nặng hơn), thì <BlueBall>3</BlueBall> là
                                        các viên chuẩn. Đồng nghĩa{" "}
                                        <RedBall>2</RedBall> +{" "}
                                        <BlueBall>3</BlueBall> nặng hơn{" "}
                                        <GreenBall>5</GreenBall>
                                      </h1>
                                      <h1>
                                        Nếu nằm trong <BlueBall>3</BlueBall>,
                                        thì chắc chắn <RedBall>2</RedBall> +{" "}
                                        <BlueBall>3</BlueBall> nhẹ hơn{" "}
                                        <GreenBall>5</GreenBall>
                                      </h1>
                                      <h1>
                                        Từ đó cũng có thể suy ra việc nên chọn{" "}
                                        <RedBall>2</RedBall> hay{" "}
                                        <BlueBall>3</BlueBall> để cân tiếp. (Sử
                                        dụng các viên chuẩn sẽ dễ dàng tìm ra
                                        viên KHÁC)
                                      </h1>
                                    </Card>
                                  </div>
                                  <VerticalLine className="mx-auto" />
                                  <div className="inline-flex flex-col items-center w-80">
                                    <VerticalLine big />
                                    <div className="flex items-start justify-between w-full">
                                      <div className="flex flex-col items-center">
                                        <Hr className="w-1/2 ml-auto" />
                                        <VerticalLine big />
                                        <div className="w-full">
                                          <div className="inline-flex flex-col items-center w-80">
                                            <Card>
                                              <h1>
                                                Vậy nên, nếu kết quả so sánh
                                                nặng hơn phải chọn{" "}
                                                <RedBall>2</RedBall> để tiếp
                                                tục.
                                              </h1>
                                              <h1>
                                                Cân 2 viên với nhau, viên nào
                                                nặng hơn thì sẽ là viên KHÁC
                                              </h1>
                                            </Card>
                                          </div>
                                        </div>
                                      </div>
                                      <Hr />
                                      <div className="flex flex-col items-center">
                                        <Hr className="w-1/2 mr-auto" />
                                        <VerticalLine big />
                                        <div className="w-full">
                                          <div className="inline-flex flex-col items-center ml-4 w-80">
                                            <Card>
                                              <h1>
                                                Nếu kết quả so sánh nặng hơn
                                                phải chọn <BlueBall>3</BlueBall>{" "}
                                                để tiếp tục.
                                              </h1>
                                              <h1>
                                                Lấy 2 viên cân với nhau, viên
                                                nào nhẹ hơn sẽ là viên khác
                                              </h1>
                                              <h1>
                                                Nếu 2 viên bằng nhau, thì viên{" "}
                                                <BlueBall>1</BlueBall> còn lại
                                                là viên KHÁC
                                              </h1>
                                            </Card>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
