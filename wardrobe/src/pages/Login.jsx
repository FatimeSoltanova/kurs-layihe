import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Daxil ol");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = currentState === "Daxil ol" 
        ? { email, password } 
        : { name, surname, email, password };
      
      const url = currentState === "Daxil ol" 
        ? "https://twitter.bitcode.az/api/auth/login" 
        : "https://twitter.bitcode.az/api/auth/register";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("Response data:", data);

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setError(data.message || "Məlumat tapılmadı, yenidən yoxlayın.");
      }
    } catch (error) {
      setError("Server xətası: zəhmət olmasa yenidən cəhd edin.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {error && (
        <div className="text-red-600 bg-red-100 p-2 rounded mb-2">
          {error}
        </div>
      )}
      {currentState === "Qeydiyyatdan keç" && (
        <>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Ad"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Soyad"
            required
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </>
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Şifrə"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="w-full flex justify-between text-sm mt-[8px]">
        <p className="cursor-pointer">Parolunuzu unutmusunuz?</p>
        {currentState === "Daxil ol" ? (
          <p
            onClick={() => setCurrentState("Qeydiyyatdan keç")}
            className="cursor-pointer"
          >
            Yeni hesab yaradın
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Daxil ol")}
            className="cursor-pointer"
          >
            Daxil olun
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4 rounded"
        disabled={loading}
      >
        {loading ? "Yüklənir..." : currentState === "Daxil ol" ? "Daxil ol" : "Qeydiyyatdan keç"}
      </button>
    </form>
  );
};

export default Login;

