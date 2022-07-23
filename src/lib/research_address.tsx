import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export type zipAPIProps = {
  allAddress: string;
  pref: string;
  city: string;
  town: string;
  postcode: string;
  officePostcode: boolean;
  office?: string;
};

export const ResearchAddress = () => {
  const [checked, setChecked] = useState(false);
  const [postals, setPostals] = useState({ postal1: "", postal2: "" });
  const [address, setAddress] = useState<zipAPIProps[] | null>(null);

  const getAddress = useCallback(async () => {
    const zipCode = postals.postal1 + postals.postal2;

    try {
      if (zipCode.length < 7) {
        setAddress(null);
        return;
      }

      const { data } = await axios.get<zipAPIProps[]>(
        `https://apis.postcode-jp.com/api/v5/postcodes/${zipCode}?fields=allAddress,pref,city,town,postcode,officePostcode,office`,
        {
          headers: {
            apikey: "f0KEvykRsNdgYzKPV8dCkY8XLF4Gey259CBqZBj",
          },
        }
      );

      console.debug(data);
      setAddress(data);

      if (!checked) setChecked(true);
    } catch (error: any) {
      console.log(error);
      setAddress(null);
      const ErrorMessage = error?.message ? error?.message : "エラーが発生しました";
      throw new Error(ErrorMessage);
    }
  }, [postals.postal1, postals.postal2]);

  useEffect(() => {
    getAddress();
  }, [getAddress]);

  return (
    <div className="mb-10">
      <div>
        <label htmlFor="postal1">郵便番号</label>
        <div className="flex items-center mt-2">
          <input
            onChange={(e) => setPostals((prev) => ({ ...prev, postal1: e.target.value }))}
            maxLength={3}
            id="postal1"
            name="postal1"
            type="text"
            className="border border-slate-700 rounded px-4 py-2 w-[68px]"
          />
          <span className="px-4">-</span>
          <input
            onChange={(e) => setPostals((prev) => ({ ...prev, postal2: e.target.value }))}
            maxLength={5}
            id="postal2"
            name="postal2"
            type="text"
            className="border border-slate-700 rounded px-4 py-2 w-[120px]"
          />
        </div>
      </div>
      <div>
        <div>
          {address && address?.length > 0 ? (
            <>
              <div className="text-lg mt-6 font-semibold">検索結果</div>
              {address.map((item, index) => {
                return (
                  <div key={index} className="text-left border-b py-6">
                    <div className="mb-2">
                      <label htmlFor="" className="font-semibold">
                        住所(全て)
                      </label>
                      <div>{item.allAddress}</div>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="" className="font-semibold">
                        都道府県
                      </label>
                      <div>{item.pref}</div>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="" className="font-semibold">
                        市区町村
                      </label>
                      <div>{item.city}</div>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="" className="font-semibold">
                        町域
                      </label>
                      <div>{item.town}</div>
                    </div>
                    {item.officePostcode && (
                      <div className="mb-2">
                        <label htmlFor="" className="font-semibold">
                          事業所名
                        </label>
                        <div>{item.office}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          ) : (
            <>{checked && <p className="mt-4">検索結果はありません</p>}</>
          )}
        </div>
      </div>
    </div>
  );
};
