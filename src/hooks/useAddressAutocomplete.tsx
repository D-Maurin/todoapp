import axios from "axios";
import { useEffect, useState } from "react";

function useAddressAutocomplete() {
  const [val, setVal] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [options, setOptions] = useState([]);

  const loading = open && options.length === 0;

  useEffect(() => {
    if (val) {
      let active = true;

      const load = async () => {
        const answer = await axios.get(
          "https://api-adresse.data.gouv.fr/search/",
          {
            params: {
              q: val,
              limit: 5,
            },
          }
        );
        const newOptions = answer.data.features.map((k: any) => {
          return {
            label: k.properties.label,
            lat: k.geometry.coordinates[1],
            lng: k.geometry.coordinates[0],
          };
        });

        if (active) {
          if (newOptions.length) setOptions(newOptions);
        }
      };

      load();

      return () => {
        active = false;
      };
    }
  }, [val]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return { setVal, handleOpen, handleClose, options, loading };
}

export default useAddressAutocomplete;
