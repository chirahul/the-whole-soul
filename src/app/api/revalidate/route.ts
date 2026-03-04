import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Revalidate all product and collection pages
    revalidatePath("/shop");
    revalidatePath("/collections/[handle]", "page");
    revalidatePath("/products/[handle]", "page");
    revalidatePath("/");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Revalidation failed" },
      { status: 500 }
    );
  }
}
