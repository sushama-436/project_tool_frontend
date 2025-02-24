import AppLayout from "./components/AppLayout";
import { Routes, Route } from "react-router-dom";
import Task from "./components/Task";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AppLayout>
      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Toaster for notifications */}
        <Toaster position="top-right" gutter={8} />

        {/* Routes */}
        <Routes>
          <Route path="/:projectId" element={<Task />} />
          <Route 
            path="/" 
            element={
              <div className="flex flex-col items-center w-full pt-10">
                <img 
                  src="/image/welcome.svg"  // ✅ Corrected path
                  alt="Welcome" 
                  className="w-5/12" 
                />
                <h1 className="text-lg text-gray-600">
                  Select or create new project
                </h1>
              </div>
            }
          />
        </Routes>
      </div>

      {/* Send Message Section at the Bottom */}
      <div className="fixed bottom-0 left-0 w-full flex items-center p-3 bg-gray-100 border-t shadow-md">
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="flex-1 p-2 border rounded-lg" 
        />
        <button className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
          Send
        </button>
      </div>
    </AppLayout>
  );
}

export default App;
