<script setup lang="js">
import {systemMessage} from "~/components/systemMessage.js";

const { $openai } = useNuxtApp();

const chatBox = ref(null);
const chatContainer = ref(null);
const userInput = ref(null);
const sendButton = ref(null);
const openChatButton = ref(null);
const closeChatButton = ref(null);

let isChatBoxOpen = false; // Set the initial state to close

const currentMessage = ref('');
const messages = ref([]);

// Function to toggle the ChatBox visibility
function toggleChatBox() {
  chatContainer.value.classList.toggle('hidden');
  isChatBoxOpen = !isChatBoxOpen; // Toggle the state
}

// Function to add user messages to the chat box
function addUserMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('mb-2', 'text-right');
  messageElement.innerHTML = `<p class="bg-light-pink text-dark-pink rounded-lg py-2 px-4 inline-block">${message}</p>`;
  chatBox.value.appendChild(messageElement);
  chatBox.value.scrollTop = chatBox.value.scrollHeight;
}

// Function to add bot messages to the chat box
function addBotMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('mb-2');
  messageElement.innerHTML = `<p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>`;
  chatBox.value.appendChild(messageElement);
  chatBox.value.scrollTop = chatBox.value.scrollHeight;
}

// Function to respond to user messages
async function respondToUser(userMessage) {
  try {
    const response = await $openai.post('/completions', {
      messages: [{ role: "system", contenFormCt: `${systemMessage} ${userMessage}` }],
      model: "gpt-3.5-turbo",
      max_tokens: 100,
    });
    addBotMessage(response.data.choices[0].message.content); // Add the response from the chatbot to the chat
  } catch (error) {
    console.error('Error:', error);
  }
}

// Event listeners setup
onMounted(() => {
  openChatButton.value.addEventListener('click', toggleChatBox);
  closeChatButton.value.addEventListener('click', toggleChatBox);

  sendButton.value.addEventListener('click', function () {
    const userMessage = userInput.value.value;
    if (userMessage.trim() !== '') {
      addUserMessage(userMessage);
      respondToUser(userMessage);
      userInput.value.value = '';
    }
  });

  userInput.value.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      const userMessage = userInput.value.value;
      if (userMessage.trim() !== '') {
        addUserMessage(userMessage);
        respondToUser(userMessage);
        userInput.value.value = '';
      }
    }
  });
});
</script>



<template>
  <!-- Button -->
  <div class="fixed bottom-20 right-0 mb-4 mr-4 z-50">
    <button ref="openChatButton" class="bg-light-pink text-dark-pink border border-dark-pink py-2 px-4 rounded-full hover:bg-dark-pink hover:text-white transition duration-300 flex items-center"
    alt="button that opens the interface to interact with the AI assistant" aria-label="button" >
      <IconsChatbot/>
    </button>
  </div>

  <div ref="chatContainer" class="hidden fixed bottom-28 sm:bottom-44 right-28 w-50 h-50 sm:w-96 sm:h-96 z-50">
    <div class="bg-white shadow-md rounded-lg max-w-lg w-full">
      <!--Chat Button-->
      <div class="p-4 border-b bg-light-pink text-dark-pink rounded-t-lg flex justify-between items-center">
        <p class="text-lg font-semibold">Assistant Bot</p>
        <button ref="closeChatButton" class="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-dark-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" role="none">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <!-- chatBox-->
      <div ref="chatBox" class="messageBox p-4 h-80 overflow-y-auto">
        <div class="mb-2">
          <p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">Hi! I can help you find information on our website and offer support if you need immediate assistance.</p>
        </div>
        <template v-for="(message, index) in messages" :key="index">
          <div :class="message.from === 'user' ? 'messageFromUser' : 'messageFromChatGpt'">
            <div :class="message.from === 'user' ? 'userMessageWrapper' : 'chatGptMessageWrapper'">
              <div :class="message.from === 'user' ? 'userMessageContent' : 'chatGptMessageContent'">{{ message.data }}</div>
            </div>
          </div>
        </template>
      </div>
      <!--Input text and send button-->
      <div class="p-4 border-t flex">
        <input ref="userInput" type="text" placeholder="Type a message" class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-light-pink">
        <button ref="sendButton" @click="respondToUser(currentMessage)" class="bg-light-pink text-dark-pink px-4 py-2 rounded-r-md hover:bg-dark-pink hover:text-white transition duration-300">Send</button>
      </div>
    </div>
  </div>
</template>


