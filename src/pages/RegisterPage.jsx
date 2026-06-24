import MainLayout from "../layouts/MainLayout";

function RegisterPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

          <h1 className="text-4xl font-bold text-center mb-8">
            Create Account
          </h1>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border rounded-lg"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 border rounded-lg"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border rounded-lg"
            />

            <select className="w-full p-4 border rounded-lg">
              <option>Customer</option>
              <option>Driver</option>
              <option>Travel Agent</option>
            </select>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-4 rounded-lg font-bold hover:bg-amber-600"
            >
              Register
            </button>

          </form>

        </div>
      </section>
    </MainLayout>
  );
}

export default RegisterPage;