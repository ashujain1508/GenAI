import { Box, Card, CardHeader, Divider, Stack, Typography } from "@mui/material";
import Eagle from '../assets/Eagle_RGB_Cyan_Large.svg';

const CurrentAccount = () => {
  return (
    <Card>
      <CardHeader title="Current Account" sx={{ height: '100%', textAlign: 'left'}} />

        <Card variant="outlined" sx={{ borderRadius: 2 , m: 1.5}}>

            <Box sx={{ p: 3 }}>
                <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                            component="img"
                            src={Eagle}
                            alt="Barclays Eagle"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography variant="h6">THE BARCLAYS BANK ACCOUNT</Typography>
                    </Stack>
                    <Typography variant="h6">£1000</Typography>
                </Stack>
            </Box>
            <Divider />
            <Box sx={{ p: 3 }}>
                <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                            component="img"
                            src={Eagle}
                            alt="Barclays Eagle"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography variant="h6">BARCLAYS BASIC CURRENT AC</Typography>
                    </Stack>
                    <Typography variant="h6">£1000</Typography>
                </Stack>
            </Box>
            <Divider />
            <Box sx={{ p: 3}}>
                <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                            component="img"
                            src={Eagle}
                            alt="Barclays Eagle"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography variant="h6">BARCLAYS BASIC CURRENT AC</Typography>
                    </Stack>
                    <Typography variant="h6">£1000</Typography>
                </Stack>
            </Box>

        </Card>
    </Card>
  );
};

export default CurrentAccount;