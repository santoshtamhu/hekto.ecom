const HeadingBar = () => {
  return (
    <div className="items-center flex gap-96 justify-center h-11 left-0 top-0 bg-violet-600 font-josefin text-zinc-100">
      <div className="flex gap-10 ">
        <span>mhhasanul@gmail.com</span>
        <span>(12345)67890</span>
      </div>
      <div className="flex gap-10">
        <div>
          <label for="languages"></label>
          <select name="languages" className="bg-transparent">
            <option className="bg-violet-600" value="English">
              English
            </option>
            <option className="bg-violet-600" value="Nepali">
              Nepali
            </option>
            <option className="bg-violet-600" value="Hindi">
              Hindi
            </option>
          </select>
        </div>
        <div>
          <label for="currencies"></label>
          <select name="currencies" className="bg-transparent">
            <option className="bg-violet-600" value="USD">
              USD
            </option>
            <option className="bg-violet-600" value="INR">
              INR
            </option>
            <option className="bg-violet-600" value="NPR">
              NPR
            </option>
          </select>
        </div>
        <div>Login</div>
        <div>Wishlist</div>
      </div>
    </div>
  );
};

export default HeadingBar;
