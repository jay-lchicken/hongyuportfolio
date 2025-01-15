// app/api/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";
export async function GET(request) {
    const { searchParams } = new URL(request.url); // Parse query parameters
    const question = searchParams.get('question'); // Get the `question` parameter

    var responseMessage;

    // Respond based on the `question` parameter
    if (!question) {
        responseMessage = 'No question provided. Please include a `question` query parameter.';
    } else{
        try {
            // Access your API key by creating an instance of GoogleGenerativeAI we'll call it GenAI
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

            // Ininitalise a generative model
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",
                systemInstruction: "Your name is HONG YU AI. My name is Hong Yu. Please only answer questions related to me. All answers should have the subject be me 'Hong Yu' I have participated in competitions such as First Lego League, IDE, and WRO. I am currently studying at the School of Science and Technology, Singapore. I am proficient in multiple programming languages, including Python, C++, HTML/CSS/JavaScript, Next.js, Swift, and Kotlin.", })
            const generationConfig = {
                temperature: 1,
                topP: 0.95,
                topK: 40,
                maxOutputTokens: 8192,
                responseMimeType: "text/plain",
            };

            const chatSession = model.startChat({
                generationConfig,
                history: [
                ],
            });


            let response = await chatSession.sendMessage(question);
            responseMessage = response.response.text();

            // Pass the prompt to the model and retrieve the output

        } catch (error) {
            console.error(error)
        }
    }
    return new Response(
        JSON.stringify({ message: responseMessage }),
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        }
    );
}