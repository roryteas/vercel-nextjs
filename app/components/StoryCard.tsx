import * as Accordion from "@radix-ui/react-accordion";
type Props = {
  criterias: string[];
  story: string;
  title: string;
};

const StoryCard = (props: Props) => {
  return (
    <>
      <Accordion.Root type="multiple">
        <Accordion.Item
          value="item-1"
          className=" w-96 h-50  px-2 py-1 rounded-md shadow-md bg-yellow-200 m-2"
        >
          <Accordion.AccordionTrigger>
            <Accordion.Header>
              <div className="w-96 mt-0 text-2xl">{props.title}</div>
            </Accordion.Header>{" "}
            <Accordion.Content className="AccordionContent">
              <div className="flex h-full ">
                <div className=" w-1/2">
                  <div className=" pb-1 text-xl ">Story</div>
                  <div className="text-left text-sm overflow-y-auto ">
                    {props.story}
                  </div>
                </div>
                <div className="  w-1/2  text-left pl-1 ml-6 ">
                  <div className=" pb-1 text-xl">Criteria</div>
                  <div className=" text-sm  ">
                    <ul className="w-full list-disc ">
                      {props.criterias.map((criteria) => (
                        <>
                          <li>{criteria}</li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.AccordionTrigger>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};

export default StoryCard;
