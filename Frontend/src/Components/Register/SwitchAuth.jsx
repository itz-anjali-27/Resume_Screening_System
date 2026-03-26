export default function SwitchAuth({ isLogin, setIsLogin }) {
  return (
    <p className="text-center text-sm text-gray-400 mt-4">
      {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
      <span
        onClick={() => setIsLogin(!isLogin)}
        className="text-blue-400 cursor-pointer"
      >
        {isLogin ? "Register" : "Login"}
      </span>
    </p>
  );
}