@@ .. @@
export default function Hero() {
  return (
-    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 px-4 sm:px-6 lg:px-8">
+    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-purple-900 to-blue-900 px-4 sm:px-6 lg:px-8">
       {/* Animated background elements */}
       <div className="absolute inset-0">
-        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
-        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300 rounded-full opacity-30 animate-bounce"></div>
-        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-green-500 rounded-full opacity-10 animate-ping"></div>
-        <div className="absolute bottom-20 right-10 w-28 h-28 bg-emerald-400 rounded-full opacity-25 animate-pulse"></div>
+        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
+        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-bounce"></div>
+        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 animate-ping"></div>
+        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full opacity-25 animate-pulse"></div>
+        
+        {/* Floating particles */}
+        {[...Array(15)].map((_, i) => (
+          <div
+            key={i}
+            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
+            style={{
+              left: `${Math.random() * 100}%`,
+              top: `${Math.random() * 100}%`,
+              animationDelay: `${Math.random() * 3}s`,
+              animationDuration: `${3 + Math.random() * 2}s`
+            }}
+          ></div>
+        ))}
       </div>
       
       <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
@@ .. @@
         
         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
-          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
+          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
             $PEPUMP
           </span>
         </h1>
@@ .. @@
         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-2">
           <button 
             onClick={() => alert('🐸 Welcome to the swamp! Connect your wallet and join the PEPUMP revolution!')}
-            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 min-h-[48px] touch-target"
+            className="w-full sm:w-auto bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 hover:from-green-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 min-h-[48px] touch-target relative overflow-hidden"
           >
+            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
+            <span className="relative">
             Enter the Swamp 🐸
+            </span>
           </button>
           <button 
             onClick={() => {
@@ .. @@
               if (email) alert(`Thanks! We'll notify ${email} when it's time to hop in! 🚀`);
             }}
-            className="w-full sm:w-auto border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 min-h-[48px] touch-target"
+            className="w-full sm:w-auto border-2 border-gradient-to-r from-green-400 to-purple-500 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-500 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 min-h-[48px] touch-target border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900"
           >
             Get Notified 🔔
           </button>
@@ .. @@
         
         <div className="flex justify-center space-x-4 sm:space-x-6 text-green-300 px-2">
-          <div className="text-center flex-1 max-w-24">
-            <div className="text-2xl sm:text-3xl font-bold">🚀</div>
+          <div className="text-center flex-1 max-w-24 group hover:scale-110 transition-transform duration-300">
+            <div className="text-2xl sm:text-3xl font-bold group-hover:animate-bounce">🚀</div>
             <div className="text-xs sm:text-sm">To the Moon</div>
           </div>
-          <div className="text-center flex-1 max-w-24">
-            <div className="text-2xl sm:text-3xl font-bold">💎</div>
+          <div className="text-center flex-1 max-w-24 group hover:scale-110 transition-transform duration-300">
+            <div className="text-2xl sm:text-3xl font-bold group-hover:animate-pulse">💎</div>
             <div className="text-xs sm:text-sm">Diamond Hands</div>
           </div>
-          <div className="text-center flex-1 max-w-24">
-            <div className="text-2xl sm:text-3xl font-bold">🌊</div>
+          <div className="text-center flex-1 max-w-24 group hover:scale-110 transition-transform duration-300">
+            <div className="text-2xl sm:text-3xl font-bold group-hover:animate-wiggle">🌊</div>
             <div className="text-xs sm:text-sm">Ride the Wave</div>
           </div>
         </div>