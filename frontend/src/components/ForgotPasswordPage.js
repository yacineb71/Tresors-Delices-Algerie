import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';
const API = `${BACKEND_URL}/api`;

const ForgotPasswordPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  const [mode, setMode] = useState(token ? 'reset' : 'request'); // 'request' or 'reset'
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [tokenValid, setTokenValid] = useState(null);
  const [tokenEmail, setTokenEmail] = useState('');

  // Verify token on mount if present
  useEffect(() => {
    if (token) {
      verifyToken();
    }
  }, [token]);

  const verifyToken = async () => {
    try {
      const response = await axios.get(`${API}/auth/verify-reset-token/${token}`);
      setTokenValid(true);
      setTokenEmail(response.data.email);
    } catch (err) {
      setTokenValid(false);
      setError(
        language === 'ar' ? 'رابط إعادة التعيين غير صالح أو منتهي الصلاحية' :
        language === 'en' ? 'Invalid or expired reset link' :
        'Lien de réinitialisation invalide ou expiré'
      );
    }
  };

  const handleRequestReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post(`${API}/auth/forgot-password`, { email });
      setSuccess(true);
    } catch (err) {
      setError(
        language === 'ar' ? 'حدث خطأ. حاول مرة أخرى.' :
        language === 'en' ? 'An error occurred. Please try again.' :
        'Une erreur s\'est produite. Veuillez réessayer.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords
    if (newPassword !== confirmPassword) {
      setError(
        language === 'ar' ? 'كلمات المرور غير متطابقة' :
        language === 'en' ? 'Passwords do not match' :
        'Les mots de passe ne correspondent pas'
      );
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setError(
        language === 'ar' ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' :
        language === 'en' ? 'Password must be at least 6 characters' :
        'Le mot de passe doit contenir au moins 6 caractères'
      );
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${API}/auth/reset-password`, {
        token,
        new_password: newPassword
      });
      setSuccess(true);
    } catch (err) {
      const detail = err.response?.data?.detail;
      setError(
        detail || (
          language === 'ar' ? 'حدث خطأ. حاول مرة أخرى.' :
          language === 'en' ? 'An error occurred. Please try again.' :
          'Une erreur s\'est produite. Veuillez réessayer.'
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const getTitle = () => {
    if (mode === 'reset') {
      return language === 'ar' ? 'إنشاء كلمة مرور جديدة' :
             language === 'en' ? 'Create New Password' :
             'Créer un nouveau mot de passe';
    }
    return language === 'ar' ? 'نسيت كلمة المرور' :
           language === 'en' ? 'Forgot Password' :
           'Mot de passe oublié';
  };

  const getSubtitle = () => {
    if (mode === 'reset') {
      return language === 'ar' ? 'أدخل كلمة المرور الجديدة' :
             language === 'en' ? 'Enter your new password' :
             'Entrez votre nouveau mot de passe';
    }
    return language === 'ar' ? 'أدخل بريدك الإلكتروني لاستلام رابط إعادة التعيين' :
           language === 'en' ? 'Enter your email to receive a reset link' :
           'Entrez votre email pour recevoir un lien de réinitialisation';
  };

  // Success state for request
  if (success && mode === 'request') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'تم إرسال البريد الإلكتروني' :
               language === 'en' ? 'Email Sent' :
               'Email envoyé'}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'ar' ? 'إذا كان هذا البريد الإلكتروني مسجلاً، ستتلقى رابط إعادة تعيين كلمة المرور قريباً.' :
               language === 'en' ? 'If this email is registered, you will receive a password reset link shortly.' :
               'Si cet email est enregistré, vous recevrez un lien de réinitialisation sous peu.'}
            </p>
            <p className="text-gray-500 text-sm mb-6">
              {language === 'ar' ? 'تحقق من صندوق البريد الوارد والبريد غير المرغوب فيه.' :
               language === 'en' ? 'Check your inbox and spam folder.' :
               'Vérifiez votre boîte de réception et vos spams.'}
            </p>
            <Link
              to="/auth"
              className="btn-primary inline-flex items-center justify-center w-full py-3"
            >
              <ArrowLeft className="mr-2" size={20} />
              {language === 'ar' ? 'العودة إلى تسجيل الدخول' :
               language === 'en' ? 'Back to Login' :
               'Retour à la connexion'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Success state for reset
  if (success && mode === 'reset') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'تم تغيير كلمة المرور' :
               language === 'en' ? 'Password Changed' :
               'Mot de passe modifié'}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'ar' ? 'تم تغيير كلمة المرور بنجاح. يمكنك الآن تسجيل الدخول.' :
               language === 'en' ? 'Your password has been successfully changed. You can now log in.' :
               'Votre mot de passe a été modifié avec succès. Vous pouvez maintenant vous connecter.'}
            </p>
            <Link
              to="/auth"
              className="btn-primary inline-flex items-center justify-center w-full py-3"
            >
              {language === 'ar' ? 'تسجيل الدخول' :
               language === 'en' ? 'Log In' :
               'Se connecter'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Invalid token state
  if (mode === 'reset' && tokenValid === false) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'رابط غير صالح' :
               language === 'en' ? 'Invalid Link' :
               'Lien invalide'}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'ar' ? 'رابط إعادة تعيين كلمة المرور غير صالح أو منتهي الصلاحية.' :
               language === 'en' ? 'This password reset link is invalid or has expired.' :
               'Ce lien de réinitialisation est invalide ou a expiré.'}
            </p>
            <Link
              to="/forgot-password"
              className="btn-primary inline-flex items-center justify-center w-full py-3 mb-4"
            >
              {language === 'ar' ? 'طلب رابط جديد' :
               language === 'en' ? 'Request New Link' :
               'Demander un nouveau lien'}
            </Link>
            <Link
              to="/auth"
              className="text-amber-600 hover:text-amber-700 font-semibold"
            >
              {language === 'ar' ? 'العودة إلى تسجيل الدخول' :
               language === 'en' ? 'Back to Login' :
               'Retour à la connexion'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Loading state for token verification
  if (mode === 'reset' && tokenValid === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {getTitle()}
          </h2>
          <p className="text-gray-600">
            {getSubtitle()}
          </p>
        </div>

        {/* Form */}
        <form 
          className="mt-8 space-y-6" 
          onSubmit={mode === 'request' ? handleRequestReset : handleResetPassword}
        >
          <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {mode === 'request' ? (
              // Request reset form
              <div className="form-group">
                <label className="form-label flex items-center">
                  <Mail size={18} className="mr-2 text-gray-500" />
                  {language === 'ar' ? 'البريد الإلكتروني' :
                   language === 'en' ? 'Email' :
                   'Email'}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                  placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' :
                              language === 'en' ? 'Enter your email' :
                              'Entrez votre email'}
                />
              </div>
            ) : (
              // Reset password form
              <>
                {tokenEmail && (
                  <div className="bg-gray-50 px-4 py-3 rounded-lg text-sm text-gray-600">
                    <span className="font-medium">Email:</span> {tokenEmail}
                  </div>
                )}
                
                <div className="form-group">
                  <label className="form-label flex items-center">
                    <Lock size={18} className="mr-2 text-gray-500" />
                    {language === 'ar' ? 'كلمة المرور الجديدة' :
                     language === 'en' ? 'New Password' :
                     'Nouveau mot de passe'}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="form-input pr-12"
                      required
                      minLength={6}
                      placeholder={language === 'ar' ? 'أدخل كلمة المرور الجديدة' :
                                  language === 'en' ? 'Enter new password' :
                                  'Entrez le nouveau mot de passe'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label flex items-center">
                    <Lock size={18} className="mr-2 text-gray-500" />
                    {language === 'ar' ? 'تأكيد كلمة المرور' :
                     language === 'en' ? 'Confirm Password' :
                     'Confirmer le mot de passe'}
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-input"
                    required
                    minLength={6}
                    placeholder={language === 'ar' ? 'أعد إدخال كلمة المرور' :
                                language === 'en' ? 'Confirm new password' :
                                'Confirmez le mot de passe'}
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : (
                mode === 'request' ? (
                  language === 'ar' ? 'إرسال رابط إعادة التعيين' :
                  language === 'en' ? 'Send Reset Link' :
                  'Envoyer le lien de réinitialisation'
                ) : (
                  language === 'ar' ? 'تغيير كلمة المرور' :
                  language === 'en' ? 'Change Password' :
                  'Changer le mot de passe'
                )
              )}
            </button>
          </div>

          {/* Back to login */}
          <div className="text-center">
            <Link
              to="/auth"
              className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              {language === 'ar' ? 'العودة إلى تسجيل الدخول' :
               language === 'en' ? 'Back to Login' :
               'Retour à la connexion'}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
