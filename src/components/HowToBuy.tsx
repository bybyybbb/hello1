@@ .. @@
  return (
-    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-green-50">
+    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-green-50 to-blue-50 relative overflow-hidden">
+      {/* Animated background */}
+      <div className="absolute inset-0">
+        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-green-200 to-blue-300 rounded-full opacity-20 animate-pulse"></div>
+        <div className="absolute bottom-40 right-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-300 rounded-full opacity-15 animate-float"></div>
+      </div>
+      
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
-        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-800 mb-3 sm:mb-4">
+        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 mb-3 sm:mb-4 animate-pulse">
           How to Buy 💸
         </h2>
         
@@ .. @@
             <div
               key={index}
-              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-transparent hover:border-green-200"
+              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-transparent hover:border-gradient-to-r hover:from-green-400 hover:to-purple-500 group"
             >
-              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-3 sm:mb-4">
+              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-3 sm:mb-4 group-hover:animate-bounce shadow-lg">
                 {step.number}
               </div>
-              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">{step.title}</h3>
-              <p className="text-green-600 text-xs sm:text-sm">{step.description}</p>
+              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-purple-700 mb-2">{step.title}</h3>
+              <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
             </div>
           ))}
         </div>
@@ .. @@
         <div className="mt-8 sm:mt-12 text-center">
-          <div className="bg-green-100 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
-            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4">🚨 Important Notice</h3>
-            <p className="text-green-700 mb-3 sm:mb-4 text-sm sm:text-base">
+          <div className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-green-200/50 shadow-xl backdrop-blur-sm">
+            <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-purple-700 mb-3 sm:mb-4 animate-pulse">🚨 Important Notice</h3>
+            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
               $PEPUMP is launching soon! Get ready to hop into the most exciting meme coin adventure.
             </p>
             <button
@@ .. @@
                 }
               }}
-              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
+              className="w-full sm:w-auto bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 hover:from-green-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base shadow-lg hover:shadow-xl relative overflow-hidden"
             >
+              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
+              <span className="relative flex items-center justify-center space-x-2">
               <Zap size={20} />
-              Get Launch Alert 🚀
+              <span>Get Launch Alert 🚀</span>
+              </span>
             </button>
           </div>
         </div>