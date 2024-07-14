// next.config.mjs

import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
  enabledEnv: "development",
});

const nextConfig = {
  images: {
    domains: [
      "orchidrepublic.com",
      "reminiscentblooms.com",
      "fakestoreapi.com",
      "res.cloudinary.com",
      "i.pinimg.com",
      "media.bloom.gallery",
    ],
  },
};

export default withAutoCert(nextConfig);
