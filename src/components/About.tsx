@@ .. @@
const About = () => {
   return (
-    <section className="py-20 bg-green-50">
+    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
+      {/* Animated background elements */}
+      <div className="absolute inset-0">
+        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-green-300 to-blue-400 rounded-full opacity-10 animate-float"></div>
+        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full opacity-10 animate-pulse"></div>
+      </div>
+      
       <div className="container mx-auto px-4">
-        <div className="max-w-4xl mx-auto text-center">
-          <h2 className="text-4xl md:text-5xl font-black text-green-800 mb-8">
+        <div className="max-w-4xl mx-auto text-center relative z-10">
+          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 mb-8 animate-pulse">
             About $PEPUMP 🐸
           </h2>
           
@@ .. @@
             <div className="flex justify-center">
               <div className="relative">
-                <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-6xl animate-bounce">
+                <div className="w-48 h-48 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl animate-bounce shadow-2xl hover:shadow-green-500/30 transition-all duration-500">
                   🚀
                 </div>
-                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center text-2xl animate-pulse">
+                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full flex items-center justify-center text-2xl animate-pulse shadow-lg">
                   🔥
                 </div>
+                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-full flex items-center justify-center text-lg animate-bounce">
+                  ⚡
+                </div>
               </div>
             </div>
           </div>