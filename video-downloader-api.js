export default {
  async fetch(request, env, ctx) {
    const urlParam = new URL(request.url).searchParams.get('url');

    // Handle CORS so your GitHub Pages site can talk to this Worker
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (!urlParam) {
      return new Response(JSON.stringify({ error: "Missing 'url' parameter" }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    try {
      // NOTE: Depending on the target platform (TikTok, IG, YouTube), 
      // you would put your extraction logic or third-party API fetch here.
      // For demonstration, this passes back a structured response object:
      
      const mockDownloadLink = "https://www.w3schools.com/html/mov_bbb.mp4"; // Placeholder direct file

      return new Response(JSON.stringify({ 
        success: true, 
        originalUrl: urlParam,
        downloadUrl: mockDownloadLink 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};