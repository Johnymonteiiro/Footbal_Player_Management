import toast from "react-hot-toast";

export async function SendData({ number }: { number: number }) {
  try {
    const res = await fetch(`/api/route`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number: number }),
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  } catch (error) {
    toast.error(
      `Sorry, we encountered an error while processing your request. Please try again later.`
    );
    return;
  }
}
